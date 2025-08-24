import { createGetFetcher } from '@shared/utils/functions'

import { IGetCurrentAccountFullDataResponse } from '../types/IGetCurrentAccountFullDataResponse'

const getCurrentAccountFullData =
  createGetFetcher<IGetCurrentAccountFullDataResponse>('/account')

export { getCurrentAccountFullData }
