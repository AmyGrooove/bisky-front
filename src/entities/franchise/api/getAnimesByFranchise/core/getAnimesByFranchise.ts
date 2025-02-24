'use server'

import { ENV } from '@shared/static'

import { IGetAnimesByFranchiseResponse } from '../types/IGetAnimesByFranchiseResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getAnimesByFranchise = async (
  franchiseID: string,
  page = 1,
  count = 40,
): Promise<IGetAnimesByFranchiseResponse> => {
  const url = new URL(`/franchise/${franchiseID}/animes`, ENV.API_URL)
  url.searchParams.append('page', String(page))
  url.searchParams.append('count', String(count))

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: await getNormalCookieHeader(cookies),
    },
    credentials: 'include',
    next: { tags: ['anime', 'franchise'], revalidate: 300 },
  })

  if (!response.ok)
    throw new Error(`getAnimesByFranchise: ${response.statusText}`)

  return response.json()
}

export { getAnimesByFranchise }
