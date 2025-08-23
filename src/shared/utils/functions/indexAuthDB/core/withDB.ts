import { IAuthDB } from '../types/IAuthDB'

import { dbPromise } from './dbPromise'

type IDBDatabaseType = import('idb').IDBPDatabase<IAuthDB>

const withDB = async <T>(fn: (db: IDBDatabaseType) => Promise<T>) => {
  const db = await dbPromise
  if (!db) return null

  return fn(db)
}

export { withDB }
