import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { ILoginByPasswordRequest } from '../types/ILoginByPasswordRequest'
import { ILoginByPasswordResponse } from '../types/ILoginByPasswordResponse'

const loginByPassword = async (body: ILoginByPasswordRequest) => {
  const url = new URL(`/auth/loginByPassword`, ENV.API_URL)

  return apiFetchPost<ILoginByPasswordResponse>(url, 'POST', { body })
}

export { loginByPassword }
