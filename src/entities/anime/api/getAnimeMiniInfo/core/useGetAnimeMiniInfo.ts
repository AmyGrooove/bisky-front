import { useQuery } from '@tanstack/react-query'
import { getAnimeMiniInfo } from './getAnimeMiniInfo'

const useGetAnimeMiniInfo = (animeID: string) => {
  return useQuery({
    queryKey: ['anime', animeID],
    queryFn: ({ signal }) => getAnimeMiniInfo(animeID, signal),
  })
}

export { useGetAnimeMiniInfo }
