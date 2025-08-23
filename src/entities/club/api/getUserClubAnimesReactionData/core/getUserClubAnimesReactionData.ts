import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetUserClubAnimesReactionDataResponse } from '../types/IGetUserClubAnimesReactionDataResponse'

const getUserClubAnimesReactionData = createGetFetcher<
  IGetUserClubAnimesReactionDataResponse[]
>('/club/{ID}/userAnimeReactions')

const useGetUserClubAnimesReactionData = (
  clubID: string,
  options: TUseQueryOptions<typeof getUserClubAnimesReactionData> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['club', clubID, 'userAnimeReactions'],
    queryFn: ({ signal }) =>
      getUserClubAnimesReactionData({
        params: { ID: clubID },
        optionsGet: { signal },
      }),
  })
}

export { useGetUserClubAnimesReactionData }
