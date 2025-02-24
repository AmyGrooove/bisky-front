'use server'

import { ENV } from '@shared/static'
import { TListStatus } from '@entities/animeEstimate/types'

import { IGetProfileListAnimesResponse } from '../types/IGetProfileListAnimesResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getProfileListAnimes = async (
  username: string,
  listStatus: TListStatus,
  searchValue = '',
  page = 1,
  count = 20,
): Promise<IGetProfileListAnimesResponse> => {
  const url = new URL(`/profile/${username}/list/${listStatus}`, ENV.API_URL)
  url.searchParams.append('searchValue', String(searchValue))
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
    throw new Error(`getProfileListAnimes: ${response.statusText}`)

  return response.json()
}

export { getProfileListAnimes }
