import { useQuery } from '@tanstack/react-query'
import { TListStatus } from '@entities/animeEstimate/types'

import { getProfileListAnimes } from './getProfileListAnimes'

const useGetProfileListAnimes = (
  username: string,
  listStatus: TListStatus,
  searchValue = '',
  page = 1,
  count = 20,
) => {
  return useQuery({
    queryKey: ['profile', username, 'list', listStatus, searchValue],
    queryFn: ({ signal }) =>
      getProfileListAnimes(
        username,
        listStatus,
        searchValue,
        page,
        count,
        false,
        signal,
      ),
  })
}

export { useGetProfileListAnimes }
