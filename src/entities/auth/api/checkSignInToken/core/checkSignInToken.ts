import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions/apiFetch'

import { ICheckSignInTokenRequest } from '../types/ICheckSignInTokenRequest'

const checkSignInToken = async (body: ICheckSignInTokenRequest) => {
  const url = new URL(`/animeEstimate/skipList`, ENV.API_URL)

  return apiFetchPost(url, 'POST', body)
}

export { checkSignInToken }
