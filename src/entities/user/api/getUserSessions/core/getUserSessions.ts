import { ENV } from '@shared/static'
import { IApiFetchGetOptions, apiFetchGet } from '@shared/utils/functions'

import { IGetUserSessionsResponse } from '../types/IGetUserSessionsResponse'

const getUserSessions = async (options?: IApiFetchGetOptions) => {
  const url = new URL('/account/getUserSessions', ENV.API_URL)

  return apiFetchGet<IGetUserSessionsResponse>(url, options)
}

export { getUserSessions }
