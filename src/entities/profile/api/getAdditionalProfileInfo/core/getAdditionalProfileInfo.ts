import { createGetFetcher } from '@shared/utils/functions'

import { IGetAdditionalProfileInfoResponse } from '../types/IGetAdditionalProfileInfoResponse'

const getAdditionalProfileInfo =
  createGetFetcher<IGetAdditionalProfileInfoResponse>(
    '/profile/{ID}/additional',
  )

export { getAdditionalProfileInfo }
