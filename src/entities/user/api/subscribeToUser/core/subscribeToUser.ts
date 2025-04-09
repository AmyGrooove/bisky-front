import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions/apiFetch'

import { ISubscribeToUserRequest } from '../types/ISubscribeToUserRequest'

const subscribeToUser = async (body: ISubscribeToUserRequest) => {
  const url = new URL(`/account/subscribeToUser`, ENV.API_URL)

  return apiFetchPost(url, 'PATCH', body)
}

export { subscribeToUser }
