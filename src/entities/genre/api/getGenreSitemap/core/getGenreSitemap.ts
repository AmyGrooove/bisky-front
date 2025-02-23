import { ENV } from '@shared/static'

import { IGetGenreSitemapResponse } from '../types/IGetGenreSitemapResponse'

const getGenreSitemap = async (): Promise<IGetGenreSitemapResponse[]> => {
  const url = new URL(`/genre/sitemap`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`getGenreSitemap: ${response.statusText}`)

  return response.json()
}

export { getGenreSitemap }
