import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetAnimeMiniInfoResponse } from '../types/IGetAnimeMiniInfoResponse'

import { getAnimeMiniInfo } from './getAnimeMiniInfo'

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
        optionsGet: { signal },
      }),
  })
}

export { useGetAnimeMiniInfo }
