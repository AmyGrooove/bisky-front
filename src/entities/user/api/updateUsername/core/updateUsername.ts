import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { IUpdateUsernameRequest } from '../types/IUpdateUsernameRequest'

const updateUsername = async (body: IUpdateUsernameRequest) => {
  const url = new URL(`/account/updateUsername`, ENV.API_URL)

  return apiFetchPost(url, 'PATCH', { body })
}

export { updateUsername }
