import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IAnimeFIltersAndSort } from '@entities/anime/types/IAnimeFIltersAndSort'
import { IGetAniPickListResponse } from '../types/IGetAniPickListResponse'

const getAniPickList = createGetFetcher<IGetAniPickListResponse[]>('/aniPick')

const useGetAniPickList = (
  additionalQuery: Pick<
    IAnimeFIltersAndSort,
    'endDate' | 'startDate' | 'rating' | 'kind' | 'season' | 'status'
  > = {},
  options: TUseQueryOptions<typeof getAniPickList> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['aniPick'],
    queryFn: ({ signal }) =>
      getAniPickList({
        query: { ...additionalQuery },
        options: { signal },
      }),
  })
}

export { useGetAniPickList }
