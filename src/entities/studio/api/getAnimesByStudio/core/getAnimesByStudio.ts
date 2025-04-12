import { ENV } from '@shared/static'
import { IApiFetchGetOptions, apiFetchGet } from '@shared/utils/functions'

import { IGetAnimesByStudioResponse } from '../types/IGetAnimesByStudioResponse'

const getAnimesByStudio = async (
  studioID: string,
  page = 1,
  count = 40,
  options?: IApiFetchGetOptions,
) => {
  const url = new URL(`/studio/${studioID}/animes`, ENV.API_URL)
  url.searchParams.append('page', String(page))
  url.searchParams.append('count', String(count))

  return apiFetchGet<IGetAnimesByStudioResponse>(url, options)
}

export { getAnimesByStudio }
