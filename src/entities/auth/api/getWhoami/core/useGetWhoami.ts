import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getWhoami } from './getWhoami'

const useGetWhoami = (options: TUseQueryOptions<typeof getWhoami> = {}) => {
  return useQuery({
    ...options,
    queryKey: ['auth', 'whoami'],
    queryFn: ({ signal }) => getWhoami({ signal }),
  })
}

export { useGetWhoami }
