import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetCurrentAccountSessionsResponse } from '../types/IGetCurrentAccountSessionsResponse'

import { getCurrentAccountSessions } from './getCurrentAccountSessions'

const useGetCurrentAccountSessions = (
  options: TUseQueryOptions<typeof getCurrentAccountSessions> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['auth', 'session'],
    queryFn: ({ signal }) =>
      getCurrentAccountSessions({ optionsGet: { signal } }),
  })
}

export { useGetCurrentAccountSessions }
