import { createGetFetcher } from '@shared/utils/functions'

import { IGetAnimeMiniInfoResponse } from '../types/IGetAnimeMiniInfoResponse'

const getAnimeMiniInfo =
  createGetFetcher<IGetAnimeMiniInfoResponse>('/anime/{ID}/mini')

export { getAnimeMiniInfo }
