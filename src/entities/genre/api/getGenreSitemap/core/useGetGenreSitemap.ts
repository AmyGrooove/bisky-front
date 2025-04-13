import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getGenreSitemap } from './getGenreSitemap'

const useGetGenreSitemap = (
  options: TUseQueryOptions<typeof getGenreSitemap> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['genre', 'sitemap'],
    queryFn: ({ signal }) => getGenreSitemap({ signal }),
  })
}

export { useGetGenreSitemap }
