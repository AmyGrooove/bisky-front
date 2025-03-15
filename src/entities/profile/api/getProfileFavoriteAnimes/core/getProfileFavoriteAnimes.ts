import { ENV } from '@shared/static'

import { IGetProfileFavoriteAnimesResponse } from '../types/IGetProfileFavoriteAnimesResponse'

const getProfileFavoriteAnimes = async (
  username: string,
  page = 1,
  count = 20,
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetProfileFavoriteAnimesResponse[]> => {
  const url = new URL(`/profile/${username}/favoriteAnimes`, ENV.API_URL)
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

  if (!response.ok) throw new Error(`${responseData.message}`)

  return responseData
}

export { getProfileFavoriteAnimes }
