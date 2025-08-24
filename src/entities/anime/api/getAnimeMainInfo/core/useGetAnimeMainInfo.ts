import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetAnimeMainInfoResponse } from '../types/IGetAnimeMainInfoResponse'

import { getAnimeMainInfo } from './getAnimeMainInfo'

const useGetAnimeMainInfo = (
  animeID: string,
  options: TUseQueryOptions<typeof getAnimeMainInfo> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', animeID],
    queryFn: ({ signal }) =>
      getAnimeMainInfo({
        params: { ID: animeID },
        optionsGet: { signal },
      }),
  })
}

export { useGetAnimeMainInfo }
