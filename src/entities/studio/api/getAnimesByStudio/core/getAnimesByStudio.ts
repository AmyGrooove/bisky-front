import { API_URL } from '@shared/static'

import { IGetAnimesByStudioResponse } from '../types/IGetAnimesByStudioResponse'

const getAnimesByStudio = async (
  studioID: string,
  page = 1,
  count = 40,
): Promise<IGetAnimesByStudioResponse> => {
  const url = new URL(`/studio/${studioID}/animes`, API_URL)
  url.searchParams.append('page', String(page))
  url.searchParams.append('count', String(count))

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok) throw new Error(`getAnimesByStudio: ${response.statusText}`)

  return response.json()
}

export { getAnimesByStudio }
