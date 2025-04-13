import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getUserSessions } from './getUserSessions'

const useGetUserSessions = (
  options: TUseQueryOptions<typeof getUserSessions> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['account', 'getUserSessions'],
    queryFn: ({ signal }) => getUserSessions({ signal, tokenType: 'refresh' }),
  })
}

export { useGetUserSessions }
