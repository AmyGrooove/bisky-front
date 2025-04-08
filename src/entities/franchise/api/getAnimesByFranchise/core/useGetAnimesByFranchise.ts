import { useQuery } from '@tanstack/react-query'

import { getAnimesByFranchise } from './getAnimesByFranchise'

const useGetAnimesByFranchise = (franchiseID: string, page = 1, count = 40) => {
  return useQuery({
    queryKey: ['franchise', franchiseID, 'animes'],
    queryFn: ({ signal }) =>
      getAnimesByFranchise(franchiseID, page, count, false, signal),
  })
}

export { useGetAnimesByFranchise }
