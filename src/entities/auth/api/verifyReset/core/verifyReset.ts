import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { IVerifyResetRequest } from '../types/IVerifyResetRequest'
import { IVerifyResetResponse } from '../types/IVerifyResetResponse'

const verifyReset = async (body: IVerifyResetRequest) => {
  const url = new URL(`/auth/verifyReset`, ENV.API_URL)

  return apiFetchPost<IVerifyResetResponse>(url, 'POST', { body })
}

export { verifyReset }
