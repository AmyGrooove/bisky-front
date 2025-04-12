import { ENV } from '@shared/static'
import { IApiFetchGetOptions, apiFetchGet } from '@shared/utils/functions'

import { IGetAnimesByGenreResponse } from '../types/IGetAnimesByGenreResponse'

const getAnimesByGenre = async (
  genreID: string,
  page = 1,
  count = 40,
  options?: IApiFetchGetOptions,
) => {
  const url = new URL(`/genre/${genreID}/animes`, ENV.API_URL)
  url.searchParams.append('page', String(page))
  url.searchParams.append('count', String(count))

  return apiFetchGet<IGetAnimesByGenreResponse>(url, options)
}

export { getAnimesByGenre }
