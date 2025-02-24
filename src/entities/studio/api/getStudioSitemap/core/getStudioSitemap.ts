'use server'

import { ENV } from '@shared/static'

import { IGetStudioSitemapResponse } from '../types/IGetStudioSitemapResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getStudioSitemap = async (): Promise<IGetStudioSitemapResponse[]> => {
  const url = new URL(`/studio/sitemap`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: await getNormalCookieHeader(cookies),
    },
    credentials: 'include',
    next: { tags: ['anime', 'studio'], revalidate: 3000 },
  })

  if (!response.ok) throw new Error(`getStudioSitemap: ${response.statusText}`)

  return response.json()
}

export { getStudioSitemap }
