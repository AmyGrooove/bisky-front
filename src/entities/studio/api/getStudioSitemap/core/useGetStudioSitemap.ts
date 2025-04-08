import { useQuery } from '@tanstack/react-query'

import { getStudioSitemap } from './getStudioSitemap'

const useGetStudioSitemap = () => {
  return useQuery({
    queryKey: ['studio', 'sitemap'],
    queryFn: ({ signal }) => getStudioSitemap(false, signal),
  })
}

export { useGetStudioSitemap }
