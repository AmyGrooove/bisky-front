import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions/apiFetch'

import { IChangePasswordRequest } from '../types/IChangePasswordRequest'

const changePassword = async (body: IChangePasswordRequest) => {
  const url = new URL(`/auth/changePassword`, ENV.API_URL)

  return apiFetchPost(url, 'PATCH', body)
}

export { changePassword }
