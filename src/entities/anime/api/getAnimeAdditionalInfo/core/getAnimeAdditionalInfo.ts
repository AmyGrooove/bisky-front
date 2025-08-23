import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetAnimeAdditionalInfoResponse } from '../types/IGetAnimeAdditionalInfoResponse'

const getAnimeAdditionalInfo =
  createGetFetcher<IGetAnimeAdditionalInfoResponse>('/anime/{ID}/additional')

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
        options: { signal },
      }),
  })
}

export { useGetAnimeAdditionalInfo }
