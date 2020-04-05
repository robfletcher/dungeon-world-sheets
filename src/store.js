import PouchDB from "pouchdb-browser";
import * as pouchDbUpsert from 'pouchdb-upsert';
import {default as pouchDbFind} from 'pouchdb-find';
import {Character} from "./character";

PouchDB.plugin(pouchDbFind);
PouchDB.plugin(pouchDbUpsert);
const db = new PouchDB('dungeon_world', {auto_compaction: true});
db.createIndex({
  index: {
    fields: ['gameid']
  }
})
  .then(response => console.log('created index', response))
  .catch(error => console.warn('error creating index', error));
db.info().then(it => console.log(it));

const remoteDB = new PouchDB('http://localhost:5984/myremotedb');

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
  }
;

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
