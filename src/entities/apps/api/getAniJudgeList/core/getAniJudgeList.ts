import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetAniJudgeListResponse } from '../types/IGetAniJudgeListResponse'

const getAniJudgeList =
  createGetFetcher<IGetAniJudgeListResponse[]>('/aniJudge')

const useGetAniJudgeList = (
  options: TUseQueryOptions<typeof getAniJudgeList> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['aniJudge'],
    queryFn: ({ signal }) =>
      getAniJudgeList({
        options: { signal },
      }),
  })
}

export { useGetAniJudgeList }
