import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getStudioSitemap } from './getStudioSitemap'

const useGetStudioSitemap = (
  options: TUseQueryOptions<typeof getStudioSitemap> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['studio', 'sitemap'],
    queryFn: ({ signal }) => getStudioSitemap({ signal }),
  })
}

export { useGetStudioSitemap }
