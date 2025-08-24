import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getUserFavoriteAnimeReactions } from './getUserFavoriteAnimeReactions'

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
        optionsGet: { signal },
      }),
  })
}

export { useGetUserFavoriteAnimeReactions }
