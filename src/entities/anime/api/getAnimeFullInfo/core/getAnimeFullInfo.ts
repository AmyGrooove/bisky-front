import { ENV } from '@shared/static'

import { IGetAnimeFullInfoResponse } from '../types/IGetAnimeFullInfoResponse'

const getAnimeFullInfo = async (
  animeID: string,
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetAnimeFullInfoResponse> => {
  const url = new URL(`/anime/fullInfo/${animeID}`, ENV.API_URL)

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

  if (!response.ok) throw new Error(`getAnimeFullInfo: ${response.statusText}`)

  return response.json()
}

export { getAnimeFullInfo }
