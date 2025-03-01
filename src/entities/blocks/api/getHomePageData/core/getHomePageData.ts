import { ENV } from '@shared/static'

import { IGetHomePageDataResponse } from '../types/IGetHomePageDataResponse'

const getHomePageData = async (
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetHomePageDataResponse> => {
  const url = new URL(`/blocks`, ENV.API_URL)

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

  if (!response.ok) throw new Error(`getHomePageData: ${response.statusText}`)

  return response.json()
}

export { getHomePageData }
