import { useQuery } from '@tanstack/react-query'

import { getHomePageData } from './getHomePageData'

const useGetHomePageData = () => {
  return useQuery({
    queryKey: ['blocks'],
    queryFn: ({ signal }) => getHomePageData({ signal }),
  })
}

export { useGetHomePageData }
