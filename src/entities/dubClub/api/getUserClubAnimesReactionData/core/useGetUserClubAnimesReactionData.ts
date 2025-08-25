import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getUserClubAnimesReactionData } from './getUserClubAnimesReactionData'

const useGetUserClubAnimesReactionData = (
  dubClubID: string,
  options: TUseQueryOptions<typeof getUserClubAnimesReactionData> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['dubClub', dubClubID, 'userAnimeReactions'],
    queryFn: ({ signal }) =>
      getUserClubAnimesReactionData({
        params: { ID: dubClubID },
        optionsGet: { signal },
      }),
  })
}

export { useGetUserClubAnimesReactionData }
