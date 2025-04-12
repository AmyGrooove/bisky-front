import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { IUnsubscribeFromUserRequest } from '../types/IUnsubscribeFromUserRequest'

const unsubscribeFromUser = async (body: IUnsubscribeFromUserRequest) => {
  const url = new URL(`/account/unsubscribeFromUser`, ENV.API_URL)

  return apiFetchPost(url, 'PATCH', { body })
}

export { unsubscribeFromUser }
