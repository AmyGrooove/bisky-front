import { ENV } from '@shared/static'

import { ISearchAnimeAndUsersResponse } from '../types/ISearchAnimeAndUsersResponse'

const searchAnimeAndUsers = async (
  searchValue: string,
  signal?: AbortSignal,
): Promise<ISearchAnimeAndUsersResponse> => {
  const url = new URL(`/search`, ENV.API_URL)
  url.searchParams.append('searchValue', String(searchValue))

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
    signal,
  })

  if (!response.ok)
    throw new Error(`searchAnimeAndUsers: ${response.statusText}`)

  return response.json()
}

export { searchAnimeAndUsers }
