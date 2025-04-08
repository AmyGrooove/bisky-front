import { ENV } from '@shared/static'

import { IRefreshTokenRequest } from '../types/IRefreshTokenRequest'

const refreshToken = async (body: IRefreshTokenRequest): Promise<string> => {
  const url = new URL(`/auth/refreshToken`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const responseData = await response.json()
    throw new Error(`${responseData.message}`)
  }

  const token = await response.text()

  return token
}

export { refreshToken }
