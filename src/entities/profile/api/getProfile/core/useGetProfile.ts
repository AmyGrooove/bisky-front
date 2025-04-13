import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getProfile } from './getProfile'

const useGetProfile = (
  username: string,
  options: TUseQueryOptions<typeof getProfile> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['profile', username],
    queryFn: ({ signal }) => getProfile(username, { signal }),
  })
}

export { useGetProfile }
