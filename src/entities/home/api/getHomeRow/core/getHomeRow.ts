import { createGetFetcher } from '@shared/utils/functions'

import { IGetHomeRowResponse } from '../types/IGetHomeRowResponse'

const getHomeRow = createGetFetcher<IGetHomeRowResponse>('/home/row')

export { getHomeRow }
