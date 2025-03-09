import { ENV } from '@shared/static'
import { IGetUserOAuthIDsResponse } from '../types/IGetUserOAuthIDsResponse'

const getUserOAuthIDs = async (
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetUserOAuthIDsResponse['socialLinks']> => {
  const url = new URL('/account/getUserOAuthIDs', ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Skip-Auth': String(skipAuth),
    },
    credentials: 'include',
    signal,
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`getUserOAuthIDs: ${responseData.message}`)

  return responseData
}

export { getUserOAuthIDs }
