import { ENV } from '@shared/static'

import { IGetAnimesFastStarResponse } from '../types/IGetAnimesFastStarResponse'

const getAnimesFastStar = async (
  signal?: AbortSignal,
): Promise<IGetAnimesFastStarResponse[]> => {
  const url = new URL(`/anime/fastStar`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
    signal,
  })

  if (!response.ok) throw new Error(`getAnimesFastStar: ${response.statusText}`)

  return response.json()
}

export { getAnimesFastStar }
