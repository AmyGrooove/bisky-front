import { ENV } from '@shared/static'

import { IGetAnimesAdminResponse } from '../types/IGetAnimesAdminResponse'

const getAnimesAdmin = async (
  excludedAnimeIDs: string[] = [],
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetAnimesAdminResponse[]> => {
  const url = new URL(`/anime/allAnimes`, ENV.API_URL)
  excludedAnimeIDs.forEach((id) =>
    url.searchParams.append('excludedAnimeIDs', id),
  )

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

  if (!response.ok) throw new Error(`getAnimesAdmin: ${responseData.message}`)

  return responseData
}

export { getAnimesAdmin }
