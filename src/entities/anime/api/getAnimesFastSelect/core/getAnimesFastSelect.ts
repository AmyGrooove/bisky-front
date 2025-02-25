import { ENV } from '@shared/static'

import { IGetAnimesFastSelectResponse } from '../types/IGetAnimesFastSelectResponse'

const getAnimesFastSelect = async (
  signal?: AbortSignal,
): Promise<IGetAnimesFastSelectResponse[]> => {
  const url = new URL(`/anime/fastSelect`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
    signal,
  })

  if (!response.ok)
    throw new Error(`getAnimesFastSelect: ${response.statusText}`)

  return response.json()
}

export { getAnimesFastSelect }
