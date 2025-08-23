import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetCollectionAnimeListResponse } from '../types/IGetCollectionAnimeListResponse'
import { IAnimeFIltersAndSort } from '@entities/anime/types/IAnimeFIltersAndSort'
import { IPaginationQuery } from '@shared/types/IPaginationQuery'

const getCollectionAnimeList =
  createGetFetcher<IGetCollectionAnimeListResponse>(
    '/collection/{ID}/animeList',
  )

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
        options: { signal },
      }),
  })
}

export { useGetCollectionAnimeList }
