import { createGetFetcher } from '@shared/utils/functions'

import { IGetInitialHomeDataResponse } from '../types/IGetInitialHomeDataResponse'

const getInitialHomeData =
  createGetFetcher<IGetInitialHomeDataResponse>('/home')

export { getInitialHomeData }
