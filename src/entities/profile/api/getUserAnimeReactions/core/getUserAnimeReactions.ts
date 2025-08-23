import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'
import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetUserAnimeReactionsResponse } from '../types/IGetUserAnimeReactionsResponse'

const getUserAnimeReactions = createGetFetcher<
  IGetUserAnimeReactionsResponse[]
>('/profile/{ID}/userAnimeReactions')

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
