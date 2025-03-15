import { ENV } from '@shared/static'

import { IGetAnimesFastStarResponse } from '../types/IGetAnimesFastStarResponse'

const getAnimesFastStar = async (
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetAnimesFastStarResponse[]> => {
  const url = new URL(`/anime/fastStar`, ENV.API_URL)

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

export { getAnimesFastStar }
