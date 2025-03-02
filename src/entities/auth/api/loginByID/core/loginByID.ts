import { ENV } from '@shared/static'

import { ILoginByIDRequest } from '../types/ILoginByIDRequest'

const loginByID = async (body: ILoginByIDRequest): Promise<true> => {
  const url = new URL(`/auth/loginByID`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`loginByID: ${responseData.message}`)

  return responseData
}

export { loginByID }
