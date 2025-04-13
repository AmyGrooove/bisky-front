import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getAnimeMiniInfo } from './getAnimeMiniInfo'

const useGetAnimeMiniInfo = (
  animeID: string,
  options: TUseQueryOptions<typeof getAnimeMiniInfo> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['anime', 'miniInfo', animeID],
    queryFn: ({ signal }) => getAnimeMiniInfo(animeID, { signal }),
  })
}

export { useGetAnimeMiniInfo }
