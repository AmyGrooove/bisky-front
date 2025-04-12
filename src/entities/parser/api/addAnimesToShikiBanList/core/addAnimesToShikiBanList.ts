import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions'

import { IAddAnimesToShikiBanListRequest } from '../types/IAddAnimesToShikiBanListRequest'

const addAnimesToShikiBanList = async (
  body: IAddAnimesToShikiBanListRequest,
) => {
  const url = new URL(`/parse/addAnimesToShikiBanList`, ENV.API_URL)

  return apiFetchPost(url, 'POST', { body })
}

export { addAnimesToShikiBanList }
