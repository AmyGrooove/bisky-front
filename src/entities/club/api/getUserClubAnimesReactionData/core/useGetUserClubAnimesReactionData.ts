import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getUserClubAnimesReactionData } from './getUserClubAnimesReactionData'

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
