import { IDBPDatabase, openDB } from 'idb'

import { IAuthDB } from '../types/IAuthDB'

const dbPromise: Promise<IDBPDatabase<IAuthDB> | null> =
  typeof window !== 'undefined'
    ? openDB<IAuthDB>('auth-db', 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('tokens')) {
            db.createObjectStore('tokens')
          }
        },
      })
    : Promise.resolve(null)

export { dbPromise }
