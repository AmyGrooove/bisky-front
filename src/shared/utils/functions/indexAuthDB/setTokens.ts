import { isNil } from '../isNil'

import { dbPromise } from './indexedAuthDb'

const setAccessToken = async (token: string) => {
  const db = await dbPromise
  if (isNil(db)) return

  await db.put('tokens', token, 'accessToken')
}

const setRefreshToken = async (token: string) => {
  const db = await dbPromise
  if (isNil(db)) return

  await db.put('tokens', token, 'refreshToken')
}

export { setAccessToken, setRefreshToken }
