'use server'

import { ENV } from '@shared/static'

import { IGetFranchiseSitemapResponse } from '../types/IGetFranchiseSitemapResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getFranchiseSitemap = async (): Promise<
  IGetFranchiseSitemapResponse[]
> => {
  const url = new URL(`/franchise/sitemap`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: await getNormalCookieHeader(cookies),
    },
    credentials: 'include',
    next: { tags: ['anime', 'franchise'], revalidate: 3000 },
  })

  if (!response.ok)
    throw new Error(`getFranchiseSitemap: ${response.statusText}`)

  return response.json()
}

export { getFranchiseSitemap }
