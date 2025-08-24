import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getSearch } from './getSearch'

const useGetSearch = (
  search: string,
  searchType: 'Anime' | 'Collection' | 'DubClub' | 'User',
  options: TUseQueryOptions<typeof getSearch> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['search', search, searchType],
    queryFn: ({ signal }) =>
      getSearch({
        query: { search, searchType },
        optionsGet: { signal },
      }),
  })
}

export { useGetSearch }
