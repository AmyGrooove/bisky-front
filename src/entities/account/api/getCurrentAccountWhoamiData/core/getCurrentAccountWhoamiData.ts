import { createGetFetcher } from '@shared/utils/functions'

import { IGetCurrentAccountWhoamiDataResponse } from '../types/IGetCurrentAccountWhoamiDataResponse'

const getCurrentAccountWhoamiData =
  createGetFetcher<IGetCurrentAccountWhoamiDataResponse>('/account/whoami')

export { getCurrentAccountWhoamiData }
