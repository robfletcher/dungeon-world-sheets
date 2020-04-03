import PouchDB from "pouchdb-browser";
import {Character} from "./character";

// TODO: ideally don't export this
export const db = new PouchDB('dungeon_world', {auto_compaction: true});
db.info().then(it => console.log(it));

export const loadGame = (id) => {
  return new Promise((resolve, reject) => {
    db
      .get(id)
      .then(game => {
        console.log('fetched game', game);
        game.characters = game.characters.map(it => Character.fromObject(it));
        resolve(game);
      })
      .catch(error => {
        console.warn('failed to load game', id, error);
        reject(error);
      });
  });
};
