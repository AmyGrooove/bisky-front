import { createGetFetcher } from '@shared/utils/functions'

import { IGetAniPickListResponse } from '../types/IGetAniPickListResponse'

const getAniPickList = createGetFetcher<IGetAniPickListResponse[]>('/aniPick')

export { getAniPickList }
