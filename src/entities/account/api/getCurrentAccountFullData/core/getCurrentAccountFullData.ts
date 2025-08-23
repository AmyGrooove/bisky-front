import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetCurrentAccountFullDataResponse } from '../types/IGetCurrentAccountFullDataResponse'

const getCurrentAccountFullData =
  createGetFetcher<IGetCurrentAccountFullDataResponse>('/account')

const useGetCurrentAccountFullData = (
  options: TUseQueryOptions<typeof getCurrentAccountFullData> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['account'],
    queryFn: ({ signal }) => getCurrentAccountFullData({ options: { signal } }),
  })
}

export { useGetCurrentAccountFullData }
