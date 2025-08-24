import { createGetFetcher } from '@shared/utils/functions'

import { IGetAniJudgeListResponse } from '../types/IGetAniJudgeListResponse'

const getAniJudgeList =
  createGetFetcher<IGetAniJudgeListResponse[]>('/aniJudge')

export { getAniJudgeList }
