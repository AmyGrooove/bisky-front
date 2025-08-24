import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetHomeRowResponse } from '../types/IGetHomeRowResponse'

import { getHomeRow } from './getHomeRow'

const useGetHomeRow = (
  elementIndex = 1,
  options: TUseQueryOptions<typeof getHomeRow> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['home', 'row', elementIndex],
    queryFn: ({ signal }) =>
      getHomeRow({ query: { elementIndex }, optionsGet: { signal } }),
  })
}

export { useGetHomeRow }
