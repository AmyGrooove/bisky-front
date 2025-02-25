import { useQuery } from '@tanstack/react-query'
import { getBlockRow } from './getBlockRow'

const useGetBlockRow = (excludedGenreIDs: string[] = []) => {
  return useQuery({
    queryKey: ['anime', 'block', 'genre', 'studio', 'franchise'],
    queryFn: ({ signal }) => getBlockRow(excludedGenreIDs, signal),
  })
}

export { useGetBlockRow }
