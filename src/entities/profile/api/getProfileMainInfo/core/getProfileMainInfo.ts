import { createGetFetcher } from '@shared/utils/functions'

import { IGetProfileMainInfoResponse } from '../types/IGetProfileMainInfoResponse'

const getProfileMainInfo =
  createGetFetcher<IGetProfileMainInfoResponse>('/profile/{ID}')

export { getProfileMainInfo }
