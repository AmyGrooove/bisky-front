import { IPaginationQuery, TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetUserFavoriteAnimesResponse } from '../types/IGetUserFavoriteAnimesResponse'
import { IAnimeFIltersAndSort } from '@entities/anime/types/IAnimeFIltersAndSort'

const getUserFavoriteAnimes = createGetFetcher<IGetUserFavoriteAnimesResponse>(
  '/profile/{ID}/favoriteAnimes',
)

const useGetUserFavoriteAnimes = (
  profileID: string,
  additionalQuery: IAnimeFIltersAndSort & IPaginationQuery = {},
  options: TUseQueryOptions<typeof getUserFavoriteAnimes> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['profile', profileID, 'favoriteAnimes'],
    queryFn: ({ signal }) =>
      getUserFavoriteAnimes({
        params: { ID: profileID },
        query: { ...additionalQuery },
        options: { signal },
      }),
  })
}

export { useGetUserFavoriteAnimes }
