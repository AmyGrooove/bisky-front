import { useQuery } from '@tanstack/react-query'
import { getAnimeFullInfo } from './getAnimeFullInfo'

const useGetAnimeFullInfo = (animeID: string) => {
  return useQuery({
    queryKey: ['anime', animeID],
    queryFn: ({ signal }) => getAnimeFullInfo(animeID, false, signal),
  })
}

export { useGetAnimeFullInfo }
