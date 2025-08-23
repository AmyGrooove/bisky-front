import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetUserCollectionAnimesReactionDataResponse } from '../types/IGetUserCollectionAnimesReactionDataResponse'

const getUserCollectionAnimesReactionData = createGetFetcher<
  IGetUserCollectionAnimesReactionDataResponse[]
>('/collection/{ID}/userAnimeReactions')

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
