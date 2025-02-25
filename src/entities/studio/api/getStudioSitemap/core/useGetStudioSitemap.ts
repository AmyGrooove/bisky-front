import { useQuery } from '@tanstack/react-query'
import { getStudioSitemap } from './getStudioSitemap'

const useGetStudioSitemap = () => {
  return useQuery({
    queryKey: ['anime', 'studio', 'sitemap'],
    queryFn: ({ signal }) => getStudioSitemap(signal),
  })
}

export { useGetStudioSitemap }
