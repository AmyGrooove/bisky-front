'use server'

import { ENV } from '@shared/static'

import { IGetAnimesByStudioResponse } from '../types/IGetAnimesByStudioResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getAnimesByStudio = async (
  studioID: string,
  page = 1,
  count = 40,
): Promise<IGetAnimesByStudioResponse> => {
  const url = new URL(`/studio/${studioID}/animes`, ENV.API_URL)
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
    next: { tags: ['anime', 'studio'], revalidate: 300 },
  })

  if (!response.ok) throw new Error(`getAnimesByStudio: ${response.statusText}`)

  return response.json()
}

export { getAnimesByStudio }
