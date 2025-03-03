import { useQuery } from '@tanstack/react-query'
import { getGenreSitemap } from './getGenreSitemap'

const useGetGenreSitemap = () => {
  return useQuery({
    queryKey: ['genre', 'sitemap'],
    queryFn: ({ signal }) => getGenreSitemap(false, signal),
  })
}

export { useGetGenreSitemap }
