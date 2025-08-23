import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetUserCurrentAnimeReactionsResponse } from '../types/IGetUserCurrentAnimeReactionsResponse'

const getUserCurrentAnimeReactions =
  createGetFetcher<IGetUserCurrentAnimeReactionsResponse>(
    '/anime/{ID}/userAnimeReactions',
  )

const useGetUserCurrentAnimeReactions = (
  animeID: string,
  options: TUseQueryOptions<typeof getUserCurrentAnimeReactions> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', animeID, 'userAnimeReactions'],
    queryFn: ({ signal }) =>
      getUserCurrentAnimeReactions({
        params: { ID: animeID },
        optionsGet: { signal },
      }),
  })
}

export { useGetUserCurrentAnimeReactions }
