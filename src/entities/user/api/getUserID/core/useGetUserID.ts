import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getUserID } from './getUserID'

const useGetUserID = (options: TUseQueryOptions<typeof getUserID> = {}) => {
  return useQuery({
    ...options,
    queryKey: ['account', 'getUserID'],
    queryFn: ({ signal }) => getUserID({ signal }),
  })
}

export { useGetUserID }
