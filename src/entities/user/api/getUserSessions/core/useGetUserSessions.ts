import { useQuery } from '@tanstack/react-query'

import { getUserSessions } from './getUserSessions'

const useGetUserSessions = () => {
  return useQuery({
    queryKey: ['account', 'getUserSessions'],
    queryFn: ({ signal }) => getUserSessions({ signal, tokenType: 'refresh' }),
  })
}

export { useGetUserSessions }
