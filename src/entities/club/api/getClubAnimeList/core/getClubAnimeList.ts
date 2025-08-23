import { IPaginationQuery, TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetClubAnimeListResponse } from '../types/IGetClubAnimeListResponse'
import { IAnimeFIltersAndSort } from '@entities/anime/types/IAnimeFIltersAndSort'

const getClubAnimeList = createGetFetcher<IGetClubAnimeListResponse>(
  '/club/{ID}/animeList',
)

const useGetClubAnimeList = (
  clubID: string,
  additionalQuery: IAnimeFIltersAndSort & IPaginationQuery = {},
  options: TUseQueryOptions<typeof getClubAnimeList> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['club', clubID, 'animeList'],
    queryFn: ({ signal }) =>
      getClubAnimeList({
        params: { ID: clubID },
        query: { ...additionalQuery },
        options: { signal },
      }),
  })
}

export { useGetClubAnimeList }
