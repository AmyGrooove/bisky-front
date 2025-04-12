import { isNil } from '../isNil'

import { dbPromise } from './indexedAuthDb'

const deleteAccessToken = async () => {
  const db = await dbPromise
  if (isNil(db)) return

  await db.delete('tokens', 'accessToken')
}

const deleteRefreshToken = async () => {
  const db = await dbPromise
  if (isNil(db)) return

  await db.delete('tokens', 'refreshToken')
}

export { deleteAccessToken, deleteRefreshToken }
