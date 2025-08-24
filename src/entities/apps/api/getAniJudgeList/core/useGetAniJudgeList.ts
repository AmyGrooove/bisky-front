import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getAniJudgeList } from './getAniJudgeList'

const useGetAniJudgeList = (
  options: TUseQueryOptions<typeof getAniJudgeList> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['aniJudge'],
    queryFn: ({ signal }) =>
      getAniJudgeList({
        optionsGet: { signal },
      }),
  })
}

export { useGetAniJudgeList }
