import { API_URL } from '@shared/static'

import { IChangePasswordRequest } from '../types/IChangePasswordRequest'

const changePassword = async (body: IChangePasswordRequest): Promise<true> => {
  const url = new URL(`/auth/changePassword`, API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok) throw new Error(`changePassword: ${response.statusText}`)

  return response.json()
}

export { changePassword }
