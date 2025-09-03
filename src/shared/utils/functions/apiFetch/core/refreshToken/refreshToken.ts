import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { IRefreshTokenResponse } from '../../types/IRefreshTokenResponse'

const refreshToken = async () => {
  const url = new URL(`/auth/session/refresh`, ENV.API_URL)

  return apiFetchPost<IRefreshTokenResponse>(url, 'PATCH', {
    tokenType: 'refreshToken',
  })
}

export { refreshToken }
