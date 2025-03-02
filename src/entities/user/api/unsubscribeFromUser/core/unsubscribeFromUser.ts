import { ENV } from '@shared/static'

import { IUnsubscribeFromUserRequest } from '../types/IUnsubscribeFromUserRequest'

const unsubscribeFromUser = async (
  body: IUnsubscribeFromUserRequest,
): Promise<true> => {
  const url = new URL(`/account/unsubscribeFromUser`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const responseData = await response.json()

  if (!response.ok)
    throw new Error(`unsubscribeFromUser: ${responseData.message}`)

  return responseData
}

export { unsubscribeFromUser }
