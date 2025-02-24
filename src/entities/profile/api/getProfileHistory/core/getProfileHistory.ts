'use server'

import { ENV } from '@shared/static'

import { IGetProfileHistoryResponse } from '../types/IGetProfileHistoryResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getProfileHistory = async (
  username: string,
  page = 1,
  count = 40,
): Promise<IGetProfileHistoryResponse[]> => {
  const url = new URL(`/profile/${username}/history`, ENV.API_URL)
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
    next: { tags: ['user', 'history'], revalidate: 300 },
  })

  if (!response.ok) throw new Error(`getProfileHistory: ${response.statusText}`)

  return response.json()
}

export { getProfileHistory }
