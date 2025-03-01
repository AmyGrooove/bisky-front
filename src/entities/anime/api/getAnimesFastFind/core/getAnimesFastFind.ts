import { ENV } from '@shared/static'

import { IGetAnimesFastFindResponse } from '../types/IGetAnimesFastFindResponse'

const getAnimesFastFind = async (
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetAnimesFastFindResponse[]> => {
  const url = new URL(`/anime/fastFind`, ENV.API_URL)

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

  if (!response.ok) throw new Error(`getAnimesFastFind: ${response.statusText}`)

  return response.json()
}

export { getAnimesFastFind }
