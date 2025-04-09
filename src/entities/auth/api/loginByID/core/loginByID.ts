import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions/apiFetch'

import { ILoginByIDRequest } from '../types/ILoginByIDRequest'

const loginByID = async (body: ILoginByIDRequest) => {
  const url = new URL(`/auth/loginByID`, ENV.API_URL)

  return apiFetchPost(url, 'POST', body)
}

export { loginByID }
