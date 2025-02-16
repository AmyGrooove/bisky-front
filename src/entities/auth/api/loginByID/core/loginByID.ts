import { API_URL } from '@shared/static'

import { ILoginByIDRequest } from '../types/ILoginByIDRequest'

const loginByID = async (body: ILoginByIDRequest): Promise<true> => {
  const url = new URL(`/auth/loginByID`, API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`loginByID: ${response.statusText}`)

  return response.json()
}

export { loginByID }
