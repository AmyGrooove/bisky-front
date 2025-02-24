'use server'

import { ENV } from '@shared/static'

import { IGetProfileFavoriteAnimesResponse } from '../types/IGetProfileFavoriteAnimesResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getProfileFavoriteAnimes = async (
  username: string,
  page = 1,
  count = 20,
): Promise<IGetProfileFavoriteAnimesResponse[]> => {
  const url = new URL(`/profile/${username}/favoriteAnimes`, ENV.API_URL)
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
    next: { tags: ['user', 'anime'], revalidate: 300 },
  })

  if (!response.ok)
    throw new Error(`getProfileFavoriteAnimes: ${response.statusText}`)

  return response.json()
}

export { getProfileFavoriteAnimes }
