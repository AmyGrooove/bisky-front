import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getCurrentAccountFullData } from './getCurrentAccountFullData'

const useGetCurrentAccountFullData = (
  options: TUseQueryOptions<typeof getCurrentAccountFullData> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['account'],
    queryFn: ({ signal }) =>
      getCurrentAccountFullData({ optionsGet: { signal } }),
  })
}

export { useGetCurrentAccountFullData }
