import { createGetFetcher } from '@shared/utils/functions'

import { TGetHomeRowResponse } from '../types/TGetHomeRowResponse'

const getHomeRow = createGetFetcher<TGetHomeRowResponse>('/home/row')

export { getHomeRow }
