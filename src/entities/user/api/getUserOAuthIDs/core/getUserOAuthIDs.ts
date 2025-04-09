import { ENV } from '@shared/static'
import {
  IApiFetchGetOptions,
  apiFetchGet,
} from '@shared/utils/functions/apiFetch'

import { IGetUserOAuthIDsResponse } from '../types/IGetUserOAuthIDsResponse'

const getUserOAuthIDs = async (options?: IApiFetchGetOptions) => {
  const url = new URL('/account/getUserOAuthIDs', ENV.API_URL)

  return apiFetchGet<IGetUserOAuthIDsResponse['socialLinks']>(url, options)
}

export { getUserOAuthIDs }
