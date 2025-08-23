import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetSearchResponse } from '../types/IGetSearchResponse'

const getSearch = createGetFetcher<IGetSearchResponse>('/search')

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
