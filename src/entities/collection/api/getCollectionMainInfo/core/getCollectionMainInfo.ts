import { createGetFetcher } from '@shared/utils/functions'

import { IGetCollectionMainInfoResponse } from '../types/IGetCollectionMainInfoResponse'

const getCollectionMainInfo =
  createGetFetcher<IGetCollectionMainInfoResponse>('/collection/{ID}')

export { getCollectionMainInfo }
