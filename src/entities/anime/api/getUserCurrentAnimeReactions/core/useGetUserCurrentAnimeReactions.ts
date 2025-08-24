import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getUserCurrentAnimeReactions } from './getUserCurrentAnimeReactions'

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
