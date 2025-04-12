import { ENV } from '@shared/static'
import { apiFetchGet, IApiFetchGetOptions } from '@shared/utils/functions'

import { IGetAllAnimesResponse } from '../types/IGetAllAnimesResponse'

const getAllAnimes = async (options?: IApiFetchGetOptions) => {
  const url = new URL(`/anime/allAnimes`, ENV.API_URL)

  return apiFetchGet<IGetAllAnimesResponse[]>(url, options)
}

export { getAllAnimes }
