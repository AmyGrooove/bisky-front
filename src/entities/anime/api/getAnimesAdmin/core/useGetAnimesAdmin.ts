import { useQuery } from '@tanstack/react-query'
import { getAnimesAdmin } from './getAnimesAdmin'

const useGetAnimesAdmin = (excludedAnimeIDs: string[] = []) => {
  return useQuery({
    queryKey: ['anime', 'admin'],
    queryFn: ({ signal }) => getAnimesAdmin(excludedAnimeIDs, signal),
  })
}

export { useGetAnimesAdmin }
