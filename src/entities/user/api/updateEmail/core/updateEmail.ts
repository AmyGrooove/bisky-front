import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { IUpdateEmailRequest } from '../types/IUpdateEmailRequest'

const updateEmail = async (body: IUpdateEmailRequest) => {
  const url = new URL(`/account/updateEmail`, ENV.API_URL)

  return apiFetchPost(url, 'PATCH', { body })
}

export { updateEmail }
