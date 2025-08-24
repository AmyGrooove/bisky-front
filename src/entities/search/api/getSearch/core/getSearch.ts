import { createGetFetcher } from '@shared/utils/functions'

import { IGetSearchResponse } from '../types/IGetSearchResponse'

const getSearch = createGetFetcher<IGetSearchResponse>('/search')

export { getSearch }
