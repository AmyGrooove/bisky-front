import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions/apiFetch'

import { IVerifyResetRequest } from '../types/IVerifyResetRequest'

const verifyReset = async (body: IVerifyResetRequest) => {
  const url = new URL(`/auth/verifyReset`, ENV.API_URL)

  return apiFetchPost(url, 'POST', body)
}

export { verifyReset }
