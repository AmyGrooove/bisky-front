import { ENV } from '@shared/static'

import { IGetAnimesByGenreResponse } from '../types/IGetAnimesByGenreResponse'

const getAnimesByGenre = async (
  genreID: string,
  page = 1,
  count = 40,
): Promise<IGetAnimesByGenreResponse> => {
  const url = new URL(`/genre/${genreID}/animes`, ENV.API_URL)
  url.searchParams.append('page', String(page))
  url.searchParams.append('count', String(count))

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`getAnimesByGenre: ${response.statusText}`)

  return response.json()
}

export { getAnimesByGenre }
