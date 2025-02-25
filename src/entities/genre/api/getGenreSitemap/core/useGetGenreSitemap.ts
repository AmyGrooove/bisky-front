import { useQuery } from '@tanstack/react-query'
import { getGenreSitemap } from './getGenreSitemap'

const useGetGenreSitemap = () => {
  return useQuery({
    queryKey: ['anime', 'genre', 'sitemap'],
    queryFn: ({ signal }) => getGenreSitemap(signal),
  })
}

export { useGetGenreSitemap }
