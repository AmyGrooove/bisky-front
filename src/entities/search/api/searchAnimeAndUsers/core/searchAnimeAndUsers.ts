import { ENV } from '@shared/static'

import { ISearchAnimeAndUsersResponse } from '../types/ISearchAnimeAndUsersResponse'

const searchAnimeAndUsers = async (
  searchValue: string,
  skipAuth = false,
  signal?: AbortSignal,
): Promise<ISearchAnimeAndUsersResponse> => {
  const url = new URL(`/search`, ENV.API_URL)
  url.searchParams.append('searchValue', String(searchValue))

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

  if (!response.ok) throw new Error(`${responseData.message}`)

  return responseData
}

export { searchAnimeAndUsers }
