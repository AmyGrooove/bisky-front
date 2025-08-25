import { IPaginationQuery, TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'
import { IAnimeFIltersAndSort } from '@entities/anime/types/IAnimeFIltersAndSort'

import { getClubAnimeList } from './getClubAnimeList'

const useGetClubAnimeList = (
  dubClubID: string,
  additionalQuery: IAnimeFIltersAndSort & IPaginationQuery = {},
  options: TUseQueryOptions<typeof getClubAnimeList> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['dubClub', dubClubID, 'animeList'],
    queryFn: ({ signal }) =>
      getClubAnimeList({
        params: { ID: dubClubID },
        query: { ...additionalQuery },
        optionsGet: { signal },
      }),
  })
}

export { useGetClubAnimeList }
