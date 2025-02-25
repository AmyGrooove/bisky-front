import { ENV } from '@shared/static'

import { IChangePasswordRequest } from '../types/IChangePasswordRequest'

const changePassword = async (body: IChangePasswordRequest): Promise<true> => {
  const url = new URL(`/auth/changePassword`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const result = await response.json()

  if (!response.ok) throw new Error(`changePassword: ${result.message}`)

  return result
}

export { changePassword }
