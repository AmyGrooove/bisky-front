import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { ILoginByIDRequest } from '../types/ILoginByIDRequest'
import { ILoginByIDResponse } from '../types/ILoginByIDResponse'

const loginByID = async (body: ILoginByIDRequest) => {
  const url = new URL(`/auth/loginByID`, ENV.API_URL)

  return apiFetchPost<ILoginByIDResponse>(url, 'POST', { body })
}

export { loginByID }
