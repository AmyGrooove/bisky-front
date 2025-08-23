import { TTokenKey } from '../types/iAuthDb'
import { withDB } from './withDb'

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
