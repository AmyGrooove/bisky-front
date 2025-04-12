import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { ICreateSignInTokenResponse } from '../types/ICreateSignInTokenResponse'

const createSignInToken = async () => {
  const url = new URL(`/auth/createSignInToken`, ENV.API_URL)

  return apiFetchPost<ICreateSignInTokenResponse>(url, 'POST')
}

export { createSignInToken }
