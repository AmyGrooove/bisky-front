import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { ICreateTemporaryProfileResponse } from '../types/ICreateTemporaryProfileResponse'

const createTemporaryProfile = async () => {
  const url = new URL(`/auth/createTemporaryProfile`, ENV.API_URL)

  return apiFetchPost<ICreateTemporaryProfileResponse>(url, 'POST')
}

export { createTemporaryProfile }
