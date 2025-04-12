import { ENV } from '@shared/static'
import { IApiFetchGetOptions, apiFetchGet } from '@shared/utils/functions'

import { IGetProfileResponse } from '../types/IGetProfileResponse'

const getProfile = async (username: string, options?: IApiFetchGetOptions) => {
  const url = new URL(`/profile/${username}`, ENV.API_URL)

  return apiFetchGet<IGetProfileResponse>(url, options)
}

export { getProfile }
