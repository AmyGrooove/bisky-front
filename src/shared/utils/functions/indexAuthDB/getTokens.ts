import { isNil } from '../isNil'

import { dbPromise } from './indexedAuthDb'

const getAccessToken = async (): Promise<string | null> => {
  const db = await dbPromise
  if (isNil(db)) return null

  return db.get('tokens', 'accessToken') ?? null
}

const getRefreshToken = async (): Promise<string | null> => {
  const db = await dbPromise
  if (isNil(db)) return null

  return db.get('tokens', 'refreshToken') ?? null
}

export { getAccessToken, getRefreshToken }
