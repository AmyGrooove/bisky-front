import { ENV } from '@shared/static'

import { IGetAnimesByFranchiseResponse } from '../types/IGetAnimesByFranchiseResponse'

const getAnimesByFranchise = async (
  franchiseID: string,
  page = 1,
  count = 40,
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetAnimesByFranchiseResponse> => {
  const url = new URL(`/franchise/${franchiseID}/animes`, ENV.API_URL)
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
    throw new Error(`getAnimesByFranchise: ${responseData.message}`)

  return responseData
}

export { getAnimesByFranchise }
