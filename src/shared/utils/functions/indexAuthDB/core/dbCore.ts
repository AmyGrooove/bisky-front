import { TTokenKey } from '../types/TTokenKey'

import { withDB } from './withDB'

const getDBToken = async (key: TTokenKey) =>
  withDB(async (db) => (await db.get('tokens', key)) ?? null)

const setDBToken = async (key: TTokenKey, token: string) =>
  withDB(async (db) => {
    await db.put('tokens', token, key)
  })

const deleteDBToken = async (key: TTokenKey) =>
  withDB(async (db) => {
    await db.delete('tokens', key)
  })

export { getDBToken, setDBToken, deleteDBToken }
