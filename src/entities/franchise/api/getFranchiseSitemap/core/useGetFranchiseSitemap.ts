import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getFranchiseSitemap } from './getFranchiseSitemap'

const useGetFranchiseSitemap = (
  options: TUseQueryOptions<typeof getFranchiseSitemap> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['franchise', 'sitemap'],
    queryFn: ({ signal }) => getFranchiseSitemap({ signal }),
  })
}

export { useGetFranchiseSitemap }
