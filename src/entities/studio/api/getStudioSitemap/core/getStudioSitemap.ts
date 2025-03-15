import { ENV } from '@shared/static'

import { IGetStudioSitemapResponse } from '../types/IGetStudioSitemapResponse'

const getStudioSitemap = async (
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetStudioSitemapResponse[]> => {
  const url = new URL(`/studio/sitemap`, ENV.API_URL)

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

  if (!response.ok) throw new Error(`${responseData.message}`)

  return responseData
}

export { getStudioSitemap }
