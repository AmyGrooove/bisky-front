import { useQuery } from '@tanstack/react-query'

import { getBlockRow } from './getBlockRow'

const useGetBlockRow = (excludedGenreIDs: string[] = []) => {
  return useQuery({
    queryKey: ['blocks', 'row'],
    queryFn: ({ signal }) => getBlockRow(excludedGenreIDs, { signal }),
  })
}

export { useGetBlockRow }
