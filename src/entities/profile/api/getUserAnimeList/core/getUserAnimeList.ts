import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'
import { IPaginationQuery, TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'
import { IAnimeFIltersAndSort } from '@entities/anime/types/IAnimeFIltersAndSort'

import { IGetUserAnimeListResponse } from '../types/IGetUserAnimeListResponse'

const getUserAnimeList = createGetFetcher<IGetUserAnimeListResponse>(
  '/profile/{ID}/animeList',
)

const useGetUserAnimeList = (
  profileID: string,
  listStatus: IUserAnimeReactionModel['status'] = 'added',
  additionalQuery: IAnimeFIltersAndSort & IPaginationQuery = {},
  options: TUseQueryOptions<typeof getUserAnimeList> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['profile', profileID, 'animeList', listStatus],
    queryFn: ({ signal }) =>
      getUserAnimeList({
        params: { ID: profileID },
        query: { ...additionalQuery, listStatus },
        optionsGet: { signal },
      }),
  })
}

export { useGetUserAnimeList }
