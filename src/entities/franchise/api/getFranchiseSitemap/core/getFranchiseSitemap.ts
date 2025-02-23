import { ENV } from '@shared/static'

import { IGetFranchiseSitemapResponse } from '../types/IGetFranchiseSitemapResponse'

const getFranchiseSitemap = async (): Promise<
  IGetFranchiseSitemapResponse[]
> => {
  const url = new URL(`/franchise/sitemap`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok)
    throw new Error(`getFranchiseSitemap: ${response.statusText}`)

  return response.json()
}

export { getFranchiseSitemap }
