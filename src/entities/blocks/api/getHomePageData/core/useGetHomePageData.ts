import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getHomePageData } from './getHomePageData'

const useGetHomePageData = (
  options: TUseQueryOptions<typeof getHomePageData> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['blocks'],
    queryFn: ({ signal }) => getHomePageData({ signal }),
  })
}

export { useGetHomePageData }
