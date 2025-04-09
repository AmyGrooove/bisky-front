import { ENV } from '@shared/static'
import { TListStatus } from '@entities/animeEstimate/types'
import {
  IApiFetchGetOptions,
  apiFetchGet,
} from '@shared/utils/functions/apiFetch'

import { IGetProfileListAnimesResponse } from '../types/IGetProfileListAnimesResponse'

const getProfileListAnimes = async (
  username: string,
  listStatus: TListStatus,
  searchValue = '',
  page = 1,
  count = 20,
  options?: IApiFetchGetOptions,
) => {
  const url = new URL(`/profile/${username}/list/${listStatus}`, ENV.API_URL)
  url.searchParams.append('searchValue', String(searchValue))
  url.searchParams.append('page', String(page))
  url.searchParams.append('count', String(count))

  return apiFetchGet<IGetProfileListAnimesResponse[]>(url, options)
}

export { getProfileListAnimes }
