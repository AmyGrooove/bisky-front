import { ENV } from '@shared/static'

import { IGetAnimesByStudioResponse } from '../types/IGetAnimesByStudioResponse'

const getAnimesByStudio = async (
  studioID: string,
  page = 1,
  count = 40,
  skipAuth = false,
  signal?: AbortSignal,
): Promise<IGetAnimesByStudioResponse> => {
  const url = new URL(`/studio/${studioID}/animes`, ENV.API_URL)
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

  if (!response.ok) throw new Error(`getAnimesByStudio: ${response.statusText}`)

  return response.json()
}

export { getAnimesByStudio }
