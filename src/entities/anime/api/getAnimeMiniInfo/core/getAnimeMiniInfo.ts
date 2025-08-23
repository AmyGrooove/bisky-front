import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetAnimeMiniInfoResponse } from '../types/IGetAnimeMiniInfoResponse'

const getAnimeMiniInfo =
  createGetFetcher<IGetAnimeMiniInfoResponse>('/anime/{ID}/mini')

const useGetAnimeMiniInfo = (
  animeID: string,
  options: TUseQueryOptions<typeof getAnimeMiniInfo> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', animeID, 'mini'],
    queryFn: ({ signal }) =>
      getAnimeMiniInfo({
        params: { ID: animeID },
        options: { signal },
      }),
  })
}

export { useGetAnimeMiniInfo }
