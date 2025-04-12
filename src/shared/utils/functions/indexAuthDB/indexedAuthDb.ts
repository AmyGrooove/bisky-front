import { openDB } from 'idb'

const dbPromise =
  typeof window !== 'undefined'
    ? openDB('auth-db', 1, {
        upgrade(db) {
          db.createObjectStore('tokens')
        },
      })
    : null

export { dbPromise }
