import { useQuery } from '@tanstack/react-query'

import { getUserOAuthIDs } from './getUserOAuthIDs'

const useGetUserOAuthIDs = () => {
  return useQuery({
    queryKey: ['account', 'getUserOAuthIDs'],
    queryFn: ({ signal }) => getUserOAuthIDs(false, signal),
  })
}

export { useGetUserOAuthIDs }
