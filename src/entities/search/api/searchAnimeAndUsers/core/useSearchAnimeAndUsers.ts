import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { searchAnimeAndUsers } from './searchAnimeAndUsers'

const useSearchAnimeAndUsers = (
  searchValue: string,
  options: TUseQueryOptions<typeof searchAnimeAndUsers> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['search', searchValue],
    queryFn: ({ signal }) => searchAnimeAndUsers(searchValue, { signal }),
  })
}

export { useSearchAnimeAndUsers }
