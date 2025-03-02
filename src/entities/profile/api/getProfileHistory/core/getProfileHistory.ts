import { ENV } from '@shared/static'

import { IGetProfileHistoryResponse } from '../types/IGetProfileHistoryResponse'

const getProfileHistory = async (
  username: string,
  page = 1,
  count = 40,
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetProfileHistoryResponse[]> => {
  const url = new URL(`/profile/${username}/history`, ENV.API_URL)
  url.searchParams.append('page', String(page))
  url.searchParams.append('count', String(count))

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

  if (!response.ok)
    throw new Error(`getProfileHistory: ${responseData.message}`)

  return responseData
}

export { getProfileHistory }
