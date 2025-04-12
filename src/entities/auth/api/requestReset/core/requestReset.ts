import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { IRequestResetRequest } from '../types/IRequestResetRequest'

const requestReset = async (body: IRequestResetRequest) => {
  const url = new URL(`/auth/requestReset`, ENV.API_URL)

  return apiFetchPost(url, 'POST', { body })
}

export { requestReset }
