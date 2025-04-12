import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { IDeleteSessionRequest } from '../types/IDeleteSessionRequest'

const deleteSession = async (body: IDeleteSessionRequest) => {
  const url = new URL(`/account/deleteSession`, ENV.API_URL)

  return apiFetchPost(url, 'DELETE', { body })
}

export { deleteSession }
