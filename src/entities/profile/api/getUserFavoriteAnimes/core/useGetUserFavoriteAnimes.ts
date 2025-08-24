import { IPaginationQuery, TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'
import { IAnimeFIltersAndSort } from '@entities/anime/types/IAnimeFIltersAndSort'

import { getUserFavoriteAnimes } from './getUserFavoriteAnimes'

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
        optionsGet: { signal },
      }),
  })
}

export { useGetUserFavoriteAnimes }
