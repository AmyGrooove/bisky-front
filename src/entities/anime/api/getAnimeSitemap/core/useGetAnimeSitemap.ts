import { useQuery } from '@tanstack/react-query'
import { getAnimeSitemap } from './getAnimeSitemap'

const useGetAnimeSitemap = () => {
  return useQuery({
    queryKey: ['anime', 'sitemap'],
    queryFn: ({ signal }) => getAnimeSitemap(signal),
  })
}

export { useGetAnimeSitemap }
