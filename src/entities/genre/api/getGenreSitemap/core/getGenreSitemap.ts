'use server'

import { ENV } from '@shared/static'

import { IGetGenreSitemapResponse } from '../types/IGetGenreSitemapResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getGenreSitemap = async (): Promise<IGetGenreSitemapResponse[]> => {
  const url = new URL(`/genre/sitemap`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: await getNormalCookieHeader(cookies),
    },
    credentials: 'include',
    next: { tags: ['anime', 'genre'], revalidate: 3000 },
  })

  if (!response.ok) throw new Error(`getGenreSitemap: ${response.statusText}`)

  return response.json()
}

export { getGenreSitemap }
