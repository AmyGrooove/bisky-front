import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { IAddAnimesToShikiTrustListRequest } from '../types/IAddAnimesToShikiTrustListRequest'

const addAnimesToShikiTrustList = async (
  body: IAddAnimesToShikiTrustListRequest,
) => {
  const url = new URL(`/parse/addAnimesToShikiTrustList`, ENV.API_URL)

  return apiFetchPost(url, 'POST', { body })
}

export { addAnimesToShikiTrustList }
