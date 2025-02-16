import { API_URL } from '@shared/static'

import { IUpdateUsernameRequest } from '../types/IUpdateUsernameRequest'

const updateUsername = async (body: IUpdateUsernameRequest): Promise<true> => {
  const url = new URL(`/account/updateUsername`, API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`updateUsername: ${response.statusText}`)

  return response.json()
}

export { updateUsername }
