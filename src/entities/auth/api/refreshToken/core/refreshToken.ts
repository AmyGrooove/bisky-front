import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { IRefreshTokenResponse } from '../types/IRefreshTokenResponse'

const refreshToken = async () => {
  const url = new URL(`/auth/refreshToken`, ENV.API_URL)

  return apiFetchPost<IRefreshTokenResponse>(url, 'POST', {
    tokenType: 'refresh',
  })
}

export { refreshToken }
