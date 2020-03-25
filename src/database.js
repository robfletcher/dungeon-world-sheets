import {Character} from "./character";

let db;

export const setupDatabase = () => {
  return new Promise((resolve, reject) => {
    if (db == null) {
      let request = indexedDB.open("dw", 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('characters')) {
          db.createObjectStore('characters', {keyPath: 'id'});
        }
      };
      request.onsuccess = () => {
        db = request.result;
        db.onerror = (event) => {
          console.error("IndexedDB error", event.target.error);
        };
        resolve(db);
      };
      request.onerror = () => {
        reject(request.error);
      };
    } else {
      resolve(db);
    }
  });
};

export const storeCharacter = (character) => {
  return new Promise((resolve, reject) => {
    setupDatabase().then((db) => {
      let request = db
        .transaction(['characters'], 'readwrite')
        .objectStore('characters')
        .put(character);
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        reject(request.error);
      }
    });
  });
};

export const loadCharacter = (id) => {
  return new Promise((resolve, reject) => {
    setupDatabase().then((db) => {
      let request = db
        .transaction(['characters'], 'readonly')
        .objectStore('characters')
        .get(id);
      request.onsuccess = () => {
        if (request.result === undefined) {
          reject(`character with id ${id} not found`);
        } else {
          let character = Character.fromObject(request.result);
          resolve(character);
        }
      };
      request.onerror = () => {
        reject(request.error);
      }
    });
  });
};

export const allCharacters = () => {
  return new Promise((resolve, reject) => {
    setupDatabase().then((db) => {
      let request = db
        .transaction(['characters'], 'readonly')
        .objectStore('characters')
        .getAll();
      request.onsuccess = () => {
        resolve(request.result)
      };
      request.onerror = () => {
        reject(request.error);
      }
    });
  });
};

export const deleteCharacter = (id) => {
  return new Promise((resolve, reject) => {
    setupDatabase().then((db) => {
      let request = db
        .transaction(['characters'], 'readwrite')
        .objectStore('characters')
        .delete(id);
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        reject(request.error);
      }
    });
  });
};
