import { ENV } from '@shared/static'
import { IApiFetchGetOptions, apiFetchGet } from '@shared/utils/functions'

import { TGetUserSessionsResponse } from '../types/TGetUserSessionsResponse'

const getUserSessions = async (options?: IApiFetchGetOptions) => {
  const url = new URL('/account/getUserSessions', ENV.API_URL)

  return apiFetchGet<TGetUserSessionsResponse>(url, options)
}

export { getUserSessions }
