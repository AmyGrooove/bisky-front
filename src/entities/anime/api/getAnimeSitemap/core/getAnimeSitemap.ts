'use server'

import { ENV } from '@shared/static'

import { IGetAnimeSitemapResponse } from '../types/IGetAnimeSitemapResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getAnimeSitemap = async (): Promise<IGetAnimeSitemapResponse[]> => {
  const url = new URL(`/anime/sitemap`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: await getNormalCookieHeader(cookies),
    },
    credentials: 'include',
    next: { revalidate: 3000 },
  })

  if (!response.ok) throw new Error(`getAnimeSitemap: ${response.statusText}`)

  return response.json()
}

export { getAnimeSitemap }
