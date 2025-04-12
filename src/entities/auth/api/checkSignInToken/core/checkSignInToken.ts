import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { ICheckSignInTokenRequest } from '../types/ICheckSignInTokenRequest'
import { ICheckSignInTokenResponse } from '../types/ICheckSignInTokenResponse'

const checkSignInToken = async (body: ICheckSignInTokenRequest) => {
  const url = new URL(`/animeEstimate/skipList`, ENV.API_URL)

  return apiFetchPost<ICheckSignInTokenResponse>(url, 'POST', { body })
}

export { checkSignInToken }
