import { ENV } from '@shared/static'

import { IGetProfileResponse } from '../types/IGetProfileResponse'

const getProfile = async (
  username: string,
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetProfileResponse> => {
  const url = new URL(`/profile/${username}`, ENV.API_URL)

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

  if (!response.ok) throw new Error(`getProfile: ${responseData.message}`)

  return responseData
}

export { getProfile }
