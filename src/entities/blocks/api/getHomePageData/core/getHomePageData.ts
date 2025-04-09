import { ENV } from '@shared/static'
import {
  IApiFetchGetOptions,
  apiFetchGet,
} from '@shared/utils/functions/apiFetch'

import { IGetHomePageDataResponse } from '../types/IGetHomePageDataResponse'

const getHomePageData = async (options?: IApiFetchGetOptions) => {
  const url = new URL(`/blocks`, ENV.API_URL)

  return apiFetchGet<IGetHomePageDataResponse>(url, options)
}

export { getHomePageData }
