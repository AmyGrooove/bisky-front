import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getAnimeFullInfo } from './getAnimeFullInfo'

const useGetAnimeFullInfo = (
  animeID: string,
  options: TUseQueryOptions<typeof getAnimeFullInfo> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', 'fullInfo', animeID],
    queryFn: ({ signal }) => getAnimeFullInfo(animeID, { signal }),
  })
}

export { useGetAnimeFullInfo }
