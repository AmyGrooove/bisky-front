import { ENV } from '@shared/static'

import { IGetAnimeSitemapResponse } from '../types/IGetAnimeSitemapResponse'

const getAnimeSitemap = async (): Promise<IGetAnimeSitemapResponse[]> => {
  const url = new URL(`/anime/sitemap`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`getAnimeSitemap: ${response.statusText}`)

  return response.json()
}

export { getAnimeSitemap }
