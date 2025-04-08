import { useQuery } from '@tanstack/react-query'

import { getFranchiseSitemap } from './getFranchiseSitemap'

const useGetFranchiseSitemap = () => {
  return useQuery({
    queryKey: ['franchise', 'sitemap'],
    queryFn: ({ signal }) => getFranchiseSitemap(false, signal),
  })
}

export { useGetFranchiseSitemap }
