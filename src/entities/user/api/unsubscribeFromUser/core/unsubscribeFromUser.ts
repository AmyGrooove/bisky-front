import { API_URL } from '@shared/static'

import { IUnsubscribeFromUserRequest } from '../types/IUnsubscribeFromUserRequest'

const unsubscribeFromUser = async (
  body: IUnsubscribeFromUserRequest,
): Promise<true> => {
  const url = new URL(`/account/unsubscribeFromUser`, API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok)
    throw new Error(`unsubscribeFromUser: ${response.statusText}`)

  return response.json()
}

export { unsubscribeFromUser }
