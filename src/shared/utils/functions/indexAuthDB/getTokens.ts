import { isNil } from '../isNil'

import { dbPromise } from './indexedAuthDb'

const getAccessToken = async (): Promise<string | undefined> => {
  const db = await dbPromise
  if (isNil(db)) return

  return db.get('tokens', 'accessToken')
}

const getRefreshToken = async (): Promise<string | undefined> => {
  const db = await dbPromise
  if (isNil(db)) return

  return db.get('tokens', 'refreshToken')
}

export { getAccessToken, getRefreshToken }
