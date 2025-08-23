import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetCurrentAccountWhoamiDataResponse } from '../types/IGetCurrentAccountWhoamiDataResponse'

const getCurrentAccountWhoamiData =
  createGetFetcher<IGetCurrentAccountWhoamiDataResponse>('/account/whoami')

const useGetCurrentAccountWhoamiData = (
  options: TUseQueryOptions<typeof getCurrentAccountWhoamiData> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['account', 'whoami'],
    queryFn: ({ signal }) =>
      getCurrentAccountWhoamiData({ options: { signal } }),
  })
}

export { useGetCurrentAccountWhoamiData }
