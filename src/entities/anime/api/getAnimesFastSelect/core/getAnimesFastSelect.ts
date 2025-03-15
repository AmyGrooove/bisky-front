import { ENV } from '@shared/static'

import { IGetAnimesFastSelectResponse } from '../types/IGetAnimesFastSelectResponse'

const getAnimesFastSelect = async (
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetAnimesFastSelectResponse[]> => {
  const url = new URL(`/anime/fastSelect`, ENV.API_URL)

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

export { getAnimesFastSelect }
