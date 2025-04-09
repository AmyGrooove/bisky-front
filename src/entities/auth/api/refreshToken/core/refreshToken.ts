import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions/apiFetch'

import { IRefreshTokenRequest } from '../types/IRefreshTokenRequest'
import { IRefreshTokenResponse } from '../types/IRefreshTokenResponse'

const refreshToken = async (body: IRefreshTokenRequest) => {
  const url = new URL(`/auth/refreshToken`, ENV.API_URL)

  return apiFetchPost<IRefreshTokenResponse>(url, 'POST', body)
}

export { refreshToken }
