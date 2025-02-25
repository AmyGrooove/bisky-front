import { ENV } from '@shared/static'

import { IGetHomePageDataResponse } from '../types/IGetHomePageDataResponse'

const getHomePageData = async (
  signal?: AbortSignal,
): Promise<IGetHomePageDataResponse> => {
  const url = new URL(`/blocks`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
    signal,
  })

  if (!response.ok) throw new Error(`getHomePageData: ${response.statusText}`)

  return response.json()
}

export { getHomePageData }
