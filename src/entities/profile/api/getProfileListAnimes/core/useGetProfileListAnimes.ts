import { useQuery } from '@tanstack/react-query'
import { TListStatus } from '@entities/animeEstimate/types'
import { TUseQueryOptions } from '@shared/types'

import { getProfileListAnimes } from './getProfileListAnimes'

const useGetProfileListAnimes = (
  username: string,
  listStatus: TListStatus,
  searchValue = '',
  page = 1,
  count = 20,
  options: TUseQueryOptions<typeof getProfileListAnimes> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['profile', username, 'list', listStatus, searchValue],
    queryFn: ({ signal }) =>
      getProfileListAnimes(username, listStatus, searchValue, page, count, {
        signal,
      }),
  })
}

export { useGetProfileListAnimes }
