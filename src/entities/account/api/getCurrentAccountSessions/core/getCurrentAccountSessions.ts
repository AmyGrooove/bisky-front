import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetCurrentAccountSessionsResponse } from '../types/IGetCurrentAccountSessionsResponse'

const getCurrentAccountSessions =
  createGetFetcher<IGetCurrentAccountSessionsResponse[]>('/auth/session')

const useGetCurrentAccountSessions = (
  options: TUseQueryOptions<typeof getCurrentAccountSessions> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['auth', 'session'],
    queryFn: ({ signal }) => getCurrentAccountSessions({ options: { signal } }),
  })
}

export { useGetCurrentAccountSessions }
