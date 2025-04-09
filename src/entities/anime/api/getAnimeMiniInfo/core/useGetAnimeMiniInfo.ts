import { useQuery } from '@tanstack/react-query'

import { getAnimeMiniInfo } from './getAnimeMiniInfo'

const useGetAnimeMiniInfo = (animeID: string) => {
  return useQuery({
    queryKey: ['anime', 'miniInfo', animeID],
    queryFn: ({ signal }) => getAnimeMiniInfo(animeID, { signal }),
    enabled: animeID !== '',
  })
}

export { useGetAnimeMiniInfo }
