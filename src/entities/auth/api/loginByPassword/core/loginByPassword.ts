import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions/apiFetch'

import { ILoginByPasswordRequest } from '../types/ILoginByPasswordRequest'

const loginByPassword = async (body: ILoginByPasswordRequest) => {
  const url = new URL(`/auth/loginByPassword`, ENV.API_URL)

  return apiFetchPost(url, 'POST', body)
}

export { loginByPassword }
