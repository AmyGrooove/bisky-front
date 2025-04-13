import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getProfileFavoriteAnimes } from './getProfileFavoriteAnimes'

const useGetProfileFavoriteAnimes = (
  username: string,
  page = 1,
  count = 20,
  options: TUseQueryOptions<typeof getProfileFavoriteAnimes> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['profile', username, 'favoriteAnimes'],
    queryFn: ({ signal }) =>
      getProfileFavoriteAnimes(username, page, count, { signal }),
  })
}

export { useGetProfileFavoriteAnimes }
