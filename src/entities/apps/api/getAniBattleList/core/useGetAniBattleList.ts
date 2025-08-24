import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetAniBattleListResponse } from '../types/IGetAniBattleListResponse'

import { getAniBattleList } from './getAniBattleList'

const useGetAniBattleList = (
  options: TUseQueryOptions<typeof getAniBattleList> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['aniBattle'],
    queryFn: ({ signal }) =>
      getAniBattleList({
        optionsGet: { signal },
      }),
  })
}

export { useGetAniBattleList }
