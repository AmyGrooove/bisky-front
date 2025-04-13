import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getAnimesByFranchise } from './getAnimesByFranchise'

const useGetAnimesByFranchise = (
  franchiseID: string,
  page = 1,
  count = 40,
  options: TUseQueryOptions<typeof getAnimesByFranchise> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['franchise', franchiseID, 'animes'],
    queryFn: ({ signal }) =>
      getAnimesByFranchise(franchiseID, page, count, { signal }),
  })
}

export { useGetAnimesByFranchise }
