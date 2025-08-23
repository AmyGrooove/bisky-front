import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetUserFavoriteAnimeReactionsResponse } from '../types/IGetUserFavoriteAnimeReactionsResponse'

const getUserFavoriteAnimeReactions = createGetFetcher<
  IGetUserFavoriteAnimeReactionsResponse[]
>('/profile/{ID}/userFavoriteAnimeReactions')

const useGetUserFavoriteAnimeReactions = (
  profileID: string,
  options: TUseQueryOptions<typeof getUserFavoriteAnimeReactions> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['profile', profileID, 'userFavoriteAnimeReactions'],
    queryFn: ({ signal }) =>
      getUserFavoriteAnimeReactions({
        params: { ID: profileID },
        options: { signal },
      }),
  })
}

export { useGetUserFavoriteAnimeReactions }
