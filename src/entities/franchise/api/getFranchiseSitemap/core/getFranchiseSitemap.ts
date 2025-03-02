import { ENV } from '@shared/static'

import { IGetFranchiseSitemapResponse } from '../types/IGetFranchiseSitemapResponse'

const getFranchiseSitemap = async (
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetFranchiseSitemapResponse[]> => {
  const url = new URL(`/franchise/sitemap`, ENV.API_URL)

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

  if (!response.ok)
    throw new Error(`getFranchiseSitemap: ${responseData.message}`)

  return responseData
}

export { getFranchiseSitemap }
