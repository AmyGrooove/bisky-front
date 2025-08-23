import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetUserEpisodesDataResponse } from '../types/IGetUserEpisodesDataResponse'

const getUserEpisodesData = createGetFetcher<IGetUserEpisodesDataResponse[]>(
  '/anime/{ID}/userEpisodes',
)

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
