import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getAnimeSitemap } from './getAnimeSitemap'

const useGetAnimeSitemap = (
  options: TUseQueryOptions<typeof getAnimeSitemap> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', 'sitemap'],
    queryFn: ({ signal }) => getAnimeSitemap({ signal }),
  })
}

export { useGetAnimeSitemap }
