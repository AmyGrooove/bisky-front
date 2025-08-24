import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getCurrentAccountWhoamiData } from './getCurrentAccountWhoamiData'

const useGetCurrentAccountWhoamiData = (
  options: TUseQueryOptions<typeof getCurrentAccountWhoamiData> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['account', 'whoami'],
    queryFn: ({ signal }) =>
      getCurrentAccountWhoamiData({ optionsGet: { signal } }),
  })
}

export { useGetCurrentAccountWhoamiData }
