import PouchDB from "pouchdb-browser";
import * as pouchDbUpsert from 'pouchdb-upsert';
import {default as pouchDbFind} from 'pouchdb-find';
import {Character} from "./character";
import {derived, get, writable} from "svelte/store";

PouchDB.plugin(pouchDbFind);
PouchDB.plugin(pouchDbUpsert);
const db = new PouchDB('dungeon_world', {auto_compaction: true});
db.createIndex({
  index: {
    fields: ['gameid']
  }
})
  .catch(error => console.warn('error creating index', error));

export const databaseStore = (initial) => {
  const id = initial._id;
  const rev = writable(initial._rev, (set) => {
    let subscription;
    withDatabase(db => {
      subscription = db.changes({
        since: 'now',
        live: true,
        include_docs: true,
        doc_ids: [id]
      })
        .on('change', change => {
          if (change.doc._rev > get(rev)) {
            set(change.doc._rev);
          }
        })
        .on('error', error => {
          console.error(`subscribe ${id} sync error`, error);
        });
    });
    return () => {
      if (subscription !== undefined) {
        subscription.cancel();
      }
    }
  });

  const backing = derived(rev, ($rev, setFn) => {
    withDatabase(db => {
      db.get(id, {rev: $rev}).then(doc => {
        previous = JSON.stringify(doc);
        setFn(Character.fromObject(doc));
      });
    });
  }, initial);

  const {subscribe, set, update} = backing;

  let previous = JSON.stringify(initial);

  return {
    subscribe,

    set: (value) => {
      if (JSON.stringify(value) !== previous) {
        withDatabase(db => {
          db.put(value)
            .then(response => {
              console.debug(`set ${id} succeeded`, response);
            })
            .catch(error => {
              console.error(`set ${id} failed`, error);
            });
        });
      }
    },

    update: (callback) => {
      withDatabase(db => {
        db.get(id, {rev: get(rev)})
          .then(doc => {
            const updated = callback(Character.fromObject(doc));
            db.put(updated)
              .then(response => {
                console.debug(`update ${id} succeeded`, response);
              })
              .catch(error => {
                console.error(`update ${id} failed`, error);
              });
          })
          .catch(error => {
            console.error(`get ${id} for update failed`, error);
          });
      });
    }
  };
};

const remoteDB = new PouchDB('https://b2966220-1354-4a3d-861c-c30ee46e83db-bluemix:16752de3c55ea429a7b142d17f78473081bd41920683aa0c09661c8b23b1fff3@b2966220-1354-4a3d-861c-c30ee46e83db-bluemix.cloudantnosqldb.appdomain.cloud/dungeon-world');

const dbReady = new Promise((resolve, reject) => {
  db.replicate.from(remoteDB)
    .on('complete', (info) => {
      console.log('initial sync done');
      db.sync(remoteDB, {live: true, retry: true})
        .on('change', (event) => console.log('sync change', event))
        .on('error', (event) => console.warn('sync error', event));
      resolve(db);
    })
    .on('error', (error) => {
      reject(error);
    });
});

export const withDatabase = (callback) => {
  dbReady
    .then((db) => callback(db))
    .catch((error) => console.warn('could not sync database', error));
};

export const subscribeToChanges = (id, callback, since = 'now') => {
  db.changes({
    since: since,
    live: true,
    include_docs: true,
    doc_ids: [id]
  }).on('change', function (change) {
    callback(change.doc);
  }).on('error', function (error) {
    console.warn('subscribed sync error', error)
  });
};

export const loadGame = (id) => {
  return new Promise((resolve, reject) => {
    withDatabase((db) => {
      db
        .get(id)
        .then(game => {
          console.log('fetched game', game);
          resolve(game);
        })
        .catch(error => {
          console.warn('failed to load game', id, error);
          reject(error);
        });
    });
  });
};

export const loadCharacter = (gameId, characterId) => {
  return new Promise((resolve, reject) => {
    withDatabase((db) => {
      db
        .find({selector: {_id: characterId, gameid: gameId}})
        .then(response => {
          console.log(response);
          const character = Character.fromObject(response.docs[0]);
          console.log('fetched character', character);
          resolve(character);
        })
        .catch(error => {
          console.warn('failed to fetch character', gameId, characterId, error);
          reject(error);
        });
    });
  });
};

export const loadCharacters = (gameId) => {
  return new Promise((resolve, reject) => {
    withDatabase((db) => {
      db
        .find({selector: {gameid: gameId}})
        .then(response => {
          console.log('fetched characters', gameId, response);
          resolve(response.docs.map(it => Character.fromObject(it)));
        })
        .catch(error => {
          console.warn('failed to fetch characters', gameId, error);
          reject(error);
        });
    });
  });
};
