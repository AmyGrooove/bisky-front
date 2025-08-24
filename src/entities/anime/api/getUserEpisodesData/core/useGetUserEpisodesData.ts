import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getUserEpisodesData } from './getUserEpisodesData'

const useGetUserEpisodesData = (
  animeID: string,
  options: TUseQueryOptions<typeof getUserEpisodesData> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', animeID, 'userEpisodes'],
    queryFn: ({ signal }) =>
      getUserEpisodesData({
        params: { ID: animeID },
        optionsGet: { signal },
      }),
  })
}

export { useGetUserEpisodesData }
