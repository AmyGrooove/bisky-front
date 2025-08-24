import { createGetFetcher } from '@shared/utils/functions'

import { IGetAniBattleListResponse } from '../types/IGetAniBattleListResponse'

const getAniBattleList =
  createGetFetcher<IGetAniBattleListResponse>('/aniBattle')

export { getAniBattleList }
