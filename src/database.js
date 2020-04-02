import {Character} from "./character";
import PouchDB from "pouchdb-browser";

let db;

export const setupDatabase = () => {
  return new Promise((resolve, _) => {
    if (db == null) {
      db = new PouchDB('characters');
    }
    resolve(db);
  });
};

export const storeCharacter = (character) => {
  return setupDatabase().then((db) => {
    return db.put(character);
  });
};

export const loadCharacter = (id) => {
  return setupDatabase().then((db) => {
    return db.get(id).then((character) => {
      return Character.fromObject(character);
    });
  });
};

export const allCharacters = () => {
  return setupDatabase().then((db) => {
    return db.allDocs({include_docs: true}).then((list) => {
      return list.rows.map(it => Character.fromObject(it.doc));
    });
  });
};

export const deleteCharacter = (id) => {
  return setupDatabase().then((db) => {
    return db.get(id).then((character) => {
      return db.remove(character);
    });
  });
};
