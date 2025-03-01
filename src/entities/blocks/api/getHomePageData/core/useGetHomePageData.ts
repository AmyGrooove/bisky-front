import { useQuery } from '@tanstack/react-query'
import { getHomePageData } from './getHomePageData'

const useGetHomePageData = () => {
  return useQuery({
    queryKey: ['anime', 'block', 'genre', 'studio', 'franchise'],
    queryFn: ({ signal }) => getHomePageData(false, signal),
  })
}

export { useGetHomePageData }
