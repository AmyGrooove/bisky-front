import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { getUserOAuthIDs } from './getUserOAuthIDs'

const useGetUserOAuthIDs = (
  options: TUseQueryOptions<typeof getUserOAuthIDs> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['account', 'getUserOAuthIDs'],
    queryFn: ({ signal }) => getUserOAuthIDs({ signal }),
  })
}

export { useGetUserOAuthIDs }
