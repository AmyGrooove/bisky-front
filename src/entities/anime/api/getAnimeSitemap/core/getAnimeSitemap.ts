import { ENV } from '@shared/static'

import { IGetAnimeSitemapResponse } from '../types/IGetAnimeSitemapResponse'

const getAnimeSitemap = async (
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetAnimeSitemapResponse[]> => {
  const url = new URL(`/anime/sitemap`, ENV.API_URL)

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

  if (!response.ok) throw new Error(`getAnimeSitemap: ${response.statusText}`)

  return response.json()
}

export { getAnimeSitemap }
