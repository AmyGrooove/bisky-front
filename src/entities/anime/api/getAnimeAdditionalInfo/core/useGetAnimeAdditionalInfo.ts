import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getAnimeAdditionalInfo } from './getAnimeAdditionalInfo'

const useGetAnimeAdditionalInfo = (
  animeID: string,
  options: TUseQueryOptions<typeof getAnimeAdditionalInfo> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', animeID, 'additional'],
    queryFn: ({ signal }) =>
      getAnimeAdditionalInfo({
        params: { ID: animeID },
        optionsGet: { signal },
      }),
  })
}

export { useGetAnimeAdditionalInfo }
