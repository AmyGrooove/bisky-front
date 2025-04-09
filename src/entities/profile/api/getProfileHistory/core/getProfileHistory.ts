import { ENV } from '@shared/static'
import {
  IApiFetchGetOptions,
  apiFetchGet,
} from '@shared/utils/functions/apiFetch'

import { IGetProfileHistoryResponse } from '../types/IGetProfileHistoryResponse'

const getProfileHistory = async (
  username: string,
  page = 1,
  count = 40,
  options?: IApiFetchGetOptions,
) => {
  const url = new URL(`/profile/${username}/history`, ENV.API_URL)
  url.searchParams.append('page', String(page))
  url.searchParams.append('count', String(count))

  return apiFetchGet<IGetProfileHistoryResponse[]>(url, options)
}

export { getProfileHistory }
