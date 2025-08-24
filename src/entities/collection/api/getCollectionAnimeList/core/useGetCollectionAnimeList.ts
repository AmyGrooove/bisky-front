import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'
import { IAnimeFIltersAndSort } from '@entities/anime/types/IAnimeFIltersAndSort'
import { IPaginationQuery } from '@shared/types/IPaginationQuery'

import { IGetCollectionAnimeListResponse } from '../types/IGetCollectionAnimeListResponse'

import { getCollectionAnimeList } from './getCollectionAnimeList'

const useGetCollectionAnimeList = (
  collectionID: string,
  additionalQuery: IAnimeFIltersAndSort & IPaginationQuery = {},
  options: TUseQueryOptions<typeof getCollectionAnimeList> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['collection', collectionID, 'animeList'],
    queryFn: ({ signal }) =>
      getCollectionAnimeList({
        params: { ID: collectionID },
        query: { ...additionalQuery },
        optionsGet: { signal },
      }),
  })
}

export { useGetCollectionAnimeList }
