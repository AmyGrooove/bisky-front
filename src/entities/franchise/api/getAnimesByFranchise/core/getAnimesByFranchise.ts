import { ENV } from '@shared/static'
import {
  IApiFetchGetOptions,
  apiFetchGet,
} from '@shared/utils/functions/apiFetch'

import { IGetAnimesByFranchiseResponse } from '../types/IGetAnimesByFranchiseResponse'

const getAnimesByFranchise = async (
  franchiseID: string,
  page = 1,
  count = 40,
  options?: IApiFetchGetOptions,
) => {
  const url = new URL(`/franchise/${franchiseID}/animes`, ENV.API_URL)
  url.searchParams.append('page', String(page))
  url.searchParams.append('count', String(count))

  return apiFetchGet<IGetAnimesByFranchiseResponse>(url, options)
}

export { getAnimesByFranchise }
