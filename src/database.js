import {Character} from "./character";
import PouchDB from "pouchdb-browser";

let db;

export const setupDatabase = gameId => {
  return new Promise(resolve => {
    if (db == null) {
      db = new PouchDB(`characters_${gameId}`, {auto_compaction: true});
    }
    resolve(db);
  });
};

export const storeCharacter = (gameId, character) => {
  return setupDatabase(gameId).then(db => {
    return db.put(character);
  });
};

export const loadCharacter = (gameId, id) => {
  return setupDatabase(gameId).then(db => {
    return db.get(id).then(character => {
      return Character.fromObject(character);
    });
  });
};

export const allCharacters = gameId => {
  return setupDatabase(gameId).then(db => {
    return db.allDocs({include_docs: true}).then(list => {
      return list.rows.map(it => Character.fromObject(it.doc));
    });
  });
};

export const deleteCharacter = (gameId, id) => {
  return setupDatabase(gameId).then(db => {
    return db.get(id).then(character => {
      return db.remove(character);
    });
  });
};
