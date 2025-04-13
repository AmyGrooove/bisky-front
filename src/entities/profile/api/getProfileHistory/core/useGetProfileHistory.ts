import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getProfileHistory } from './getProfileHistory'

const useGetProfileHistory = (
  username: string,
  page = 1,
  count = 40,
  options: TUseQueryOptions<typeof getProfileHistory> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['profile', username, 'history'],
    queryFn: ({ signal }) =>
      getProfileHistory(username, page, count, { signal }),
  })
}

export { useGetProfileHistory }
