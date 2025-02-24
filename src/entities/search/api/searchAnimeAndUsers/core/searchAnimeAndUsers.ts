'use server'

import { ENV } from '@shared/static'

import { ISearchAnimeAndUsersResponse } from '../types/ISearchAnimeAndUsersResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const searchAnimeAndUsers = async (
  searchValue: string,
): Promise<ISearchAnimeAndUsersResponse> => {
  const url = new URL(`/search`, ENV.API_URL)
  url.searchParams.append('searchValue', String(searchValue))

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: await getNormalCookieHeader(cookies),
    },
    credentials: 'include',
    next: { tags: ['anime', 'user'], revalidate: 300 },
  })

  if (!response.ok)
    throw new Error(`searchAnimeAndUsers: ${response.statusText}`)

  return response.json()
}

export { searchAnimeAndUsers }
