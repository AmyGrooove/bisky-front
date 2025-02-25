import { useQuery } from '@tanstack/react-query'
import { getAnimesByFranchise } from './getAnimesByFranchise'

const useGetAnimesByFranchise = (franchiseID: string, page = 1, count = 40) => {
  return useQuery({
    queryKey: ['anime', 'franchise', franchiseID, page, count],
    queryFn: ({ signal }) =>
      getAnimesByFranchise(franchiseID, page, count, signal),
  })
}

export { useGetAnimesByFranchise }
