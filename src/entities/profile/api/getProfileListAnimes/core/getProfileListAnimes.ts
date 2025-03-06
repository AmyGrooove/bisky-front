import { ENV } from '@shared/static'
import { TListStatus } from '@entities/animeEstimate/types'

import { IGetProfileListAnimesResponse } from '../types/IGetProfileListAnimesResponse'

const getProfileListAnimes = async (
  username: string,
  listStatus: TListStatus,
  searchValue = '',
  page = 1,
  count = 20,
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetProfileListAnimesResponse[]> => {
  const url = new URL(`/profile/${username}/list/${listStatus}`, ENV.API_URL)
  url.searchParams.append('searchValue', String(searchValue))
  url.searchParams.append('page', String(page))
  url.searchParams.append('count', String(count))

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

  if (!response.ok)
    throw new Error(`getProfileListAnimes: ${responseData.message}`)

  return responseData
}

export { getProfileListAnimes }
