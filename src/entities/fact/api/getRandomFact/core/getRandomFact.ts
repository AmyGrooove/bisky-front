import { createGetFetcher } from '@shared/utils/functions'

import { IGetRandomFactResponse } from '../types/IGetRandomFactResponse'

const getRandomFact = createGetFetcher<IGetRandomFactResponse>('/fact/random')

export { getRandomFact }
