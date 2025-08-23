import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetHomeRowResponse } from '../types/IGetHomeRowResponse'

const getHomeRow = createGetFetcher<IGetHomeRowResponse>('/home/row')

const useGetHomeRow = (
  elementIndex = 1,
  options: TUseQueryOptions<typeof getHomeRow> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['home', 'row', elementIndex],
    queryFn: ({ signal }) =>
      getHomeRow({ query: { elementIndex }, options: { signal } }),
  })
}

export { useGetHomeRow }
