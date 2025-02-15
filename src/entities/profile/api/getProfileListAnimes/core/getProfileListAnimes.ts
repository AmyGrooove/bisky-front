import { API_URL } from '@shared/static'
import { TListStatus } from '@entities/animeEstimate'

import { IGetProfileListAnimesResponse } from '../types/IGetProfileListAnimesResponse'

const getProfileListAnimes = async (
  username: string,
  listStatus: TListStatus,
  searchValue = '',
  page = 1,
  count = 20,
): Promise<IGetProfileListAnimesResponse> => {
  const url = new URL(`/profile/${username}/list/${listStatus}`, API_URL)
  url.searchParams.append('searchValue', String(searchValue))
  url.searchParams.append('page', String(page))
  url.searchParams.append('count', String(count))

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok)
    throw new Error(`getProfileListAnimes: ${response.statusText}`)

  return response.json()
}

export { getProfileListAnimes }
