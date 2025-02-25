import { ENV } from '@shared/static'

import { ILoginByPasswordRequest } from '../types/ILoginByPasswordRequest'

const loginByPassword = async (
  body: ILoginByPasswordRequest,
): Promise<true> => {
  const url = new URL(`/auth/loginByPassword`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const result = await response.json()

  if (!response.ok) throw new Error(`loginByPassword: ${result.message}`)

  return result
}

export { loginByPassword }
