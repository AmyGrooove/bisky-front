import { API_URL } from '@shared/static'

import { IGetHomePageDataResponse } from '../types/IGetHomePageDataResponse'

const getHomePageData = async (): Promise<IGetHomePageDataResponse> => {
  const url = new URL(`/homePage`, API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok) throw new Error(`getHomePageData: ${response.statusText}`)

  return response.json()
}

export { getHomePageData }
