import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'
import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getUserAnimeReactions } from './getUserAnimeReactions'

const useGetUserAnimeReactions = (
  profileID: string,
  listStatus: IUserAnimeReactionModel['status'] = 'added',
  options: TUseQueryOptions<typeof getUserAnimeReactions> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['profile', profileID, 'userAnimeReactions', listStatus],
    queryFn: ({ signal }) =>
      getUserAnimeReactions({
        params: { ID: profileID },
        query: { listStatus },
        optionsGet: { signal },
      }),
  })
}

export { useGetUserAnimeReactions }
