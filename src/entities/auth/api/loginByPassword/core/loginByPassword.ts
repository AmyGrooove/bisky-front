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

  if (!response.ok) throw new Error(`loginByPassword: ${response.statusText}`)

  return response.json()
}

export { loginByPassword }
