import { ENV } from '@shared/static'
import {
  IApiFetchGetOptions,
  apiFetchGet,
} from '@shared/utils/functions/apiFetch'

import { IGetAnimesFastStarResponse } from '../types/IGetAnimesFastStarResponse'

const getAnimesFastStar = async (options?: IApiFetchGetOptions) => {
  const url = new URL(`/anime/fastStar`, ENV.API_URL)

  return apiFetchGet<IGetAnimesFastStarResponse[]>(url, options)
}

export { getAnimesFastStar }
