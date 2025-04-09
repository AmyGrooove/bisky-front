import { ENV } from '@shared/static'
import {
  IApiFetchGetOptions,
  apiFetchGet,
} from '@shared/utils/functions/apiFetch'

import { IGetUserIDResponse } from '../types/IGetUserIDResponse'

const getUserID = async (options?: IApiFetchGetOptions) => {
  const url = new URL('/account/getUserID', ENV.API_URL)

  return apiFetchGet<IGetUserIDResponse>(url, options)
}

export { getUserID }
