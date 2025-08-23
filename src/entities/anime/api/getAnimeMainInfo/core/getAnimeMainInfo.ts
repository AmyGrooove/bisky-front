import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetAnimeMainInfoResponse } from '../types/IGetAnimeMainInfoResponse'

const getAnimeMainInfo =
  createGetFetcher<IGetAnimeMainInfoResponse>('/anime/{ID}')

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
        options: { signal },
      }),
  })
}

export { useGetAnimeMainInfo }
