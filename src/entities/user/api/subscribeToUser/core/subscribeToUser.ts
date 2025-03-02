import { ENV } from '@shared/static'

import { ISubscribeToUserRequest } from '../types/ISubscribeToUserRequest'

const subscribeToUser = async (
  body: ISubscribeToUserRequest,
): Promise<true> => {
  const url = new URL(`/account/subscribeToUser`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`subscribeToUser: ${responseData.message}`)

  return responseData
}

export { subscribeToUser }
