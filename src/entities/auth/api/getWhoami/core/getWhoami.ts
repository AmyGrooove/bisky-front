import { ENV } from '@shared/static'
import { IApiFetchGetOptions, apiFetchGet } from '@shared/utils/functions'

import { IGetWhoamiResponse } from '../types/IGetWhoamiResponse'

const getWhoami = async (options?: IApiFetchGetOptions) => {
  const url = new URL(`/auth/whoami`, ENV.API_URL)

  return apiFetchGet<IGetWhoamiResponse>(url, options)
}

export { getWhoami }
