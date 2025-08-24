import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetUserCollectionAnimesReactionDataResponse } from '../types/IGetUserCollectionAnimesReactionDataResponse'

import { getUserCollectionAnimesReactionData } from './getUserCollectionAnimesReactionData'

const useGetUserCollectionAnimesReactionData = (
  collectionID: string,
  options: TUseQueryOptions<typeof getUserCollectionAnimesReactionData> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['collection', collectionID, 'userAnimeReactions'],
    queryFn: ({ signal }) =>
      getUserCollectionAnimesReactionData({
        params: { ID: collectionID },
        optionsGet: { signal },
      }),
  })
}

export { useGetUserCollectionAnimesReactionData }
