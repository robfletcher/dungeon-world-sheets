import PouchDB from "pouchdb-browser";
import * as pouchDbUpsert from 'pouchdb-upsert';
import {default as pouchDbFind} from 'pouchdb-find';
import {Character} from "./character";

// TODO: ideally don't export this
PouchDB.plugin(pouchDbFind);
PouchDB.plugin(pouchDbUpsert);
export const db = new PouchDB('dungeon_world', {auto_compaction: true});
db.createIndex({
  index: {
    fields: ['gameid']
  }
})
  .then(response => console.log('created index', response))
  .catch(error => console.warn('error creating index', error));
db.info().then(it => console.log(it));

export const loadGame = (id) => {
  return new Promise((resolve, reject) => {
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
};

export const loadCharacter = (gameId, characterId) => {
    return new Promise((resolve, reject) => {
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
  }
;

export const loadCharacters = (gameId) => {
  return new Promise((resolve, reject) => {
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
};
