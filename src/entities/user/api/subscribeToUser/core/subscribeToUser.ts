import { API_URL } from '@shared/static'

import { ISubscribeToUserRequest } from '../types/ISubscribeToUserRequest'

const subscribeToUser = async (
  body: ISubscribeToUserRequest,
): Promise<true> => {
  const url = new URL(`/account/subscribeToUser`, API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`subscribeToUser: ${response.statusText}`)

  return response.json()
}

export { subscribeToUser }
