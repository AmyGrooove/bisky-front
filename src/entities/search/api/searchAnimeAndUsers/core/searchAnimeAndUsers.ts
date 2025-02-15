import { API_URL } from '@shared/static'

import { ISearchAnimeAndUsersResponse } from '../types/ISearchAnimeAndUsersResponse'

const searchAnimeAndUsers = async (
  searchValue: string,
): Promise<ISearchAnimeAndUsersResponse> => {
  const url = new URL(`/search`, API_URL)
  url.searchParams.append('searchValue', String(searchValue))

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok)
    throw new Error(`searchAnimeAndUsers: ${response.statusText}`)

  return response.json()
}

export { searchAnimeAndUsers }
