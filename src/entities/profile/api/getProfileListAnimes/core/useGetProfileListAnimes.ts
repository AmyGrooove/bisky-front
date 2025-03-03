import { useQuery } from '@tanstack/react-query'
import { getProfileListAnimes } from './getProfileListAnimes'
import { TListStatus } from '@entities/animeEstimate/types'

const useGetProfileListAnimes = (
  username: string,
  listStatus: TListStatus,
  searchValue = '',
  page = 1,
  count = 20,
) => {
  return useQuery({
    queryKey: ['profile', username, 'list', listStatus],
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
