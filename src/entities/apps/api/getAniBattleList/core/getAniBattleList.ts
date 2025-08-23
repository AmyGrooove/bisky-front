import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetAniBattleListResponse } from '../types/IGetAniBattleListResponse'

const getAniBattleList =
  createGetFetcher<IGetAniBattleListResponse>('/aniBattle')

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
