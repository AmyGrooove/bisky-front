import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getBlockRow } from './getBlockRow'

const useGetBlockRow = (
  excludedGenreIDs: string[] = [],
  options: TUseQueryOptions<typeof getBlockRow> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['blocks', 'row'],
    queryFn: ({ signal }) => getBlockRow(excludedGenreIDs, { signal }),
  })
}

export { useGetBlockRow }
