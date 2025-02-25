import { useQuery } from '@tanstack/react-query'
import { getFranchiseSitemap } from './getFranchiseSitemap'

const useGetFranchiseSitemap = () => {
  return useQuery({
    queryKey: ['anime', 'franchise', 'sitemap'],
    queryFn: ({ signal }) => getFranchiseSitemap(signal),
  })
}

export { useGetFranchiseSitemap }
