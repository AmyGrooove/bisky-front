import { ENV } from '@shared/static'

import { IUpdateUsernameRequest } from '../types/IUpdateUsernameRequest'

const updateUsername = async (body: IUpdateUsernameRequest): Promise<true> => {
  const url = new URL(`/account/updateUsername`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`${responseData.message}`)

  return responseData
}

export { updateUsername }
