import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>{

 console.error('putDb not implemented');
const getInDB = await openDB('jate', 1);
const transact = getInDB.transaction('jate', 'readwrite');
const storejate = transact.objectStore('jate');
const requestj = storejate.put({value: content})
const res = await requestj

}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {console.error('getDb not implemented');
const getInDB = await openDB('jate', 1);
const transact = getInDB.transaction('jate', 'readonly');
const storejate = transact.objectStore('jate');
const requestj = storejate.get(1)
const res = await requestj
return res?.value
}
initdb();
