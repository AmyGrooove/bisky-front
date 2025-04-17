import { useQuery, useQueryClient } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'
import { getAccessToken } from '@shared/utils/functions'

import { getWhoami } from './getWhoami'

const useGetWhoami = (options: TUseQueryOptions<typeof getWhoami> = {}) => {
  const queryClient = useQueryClient()

  return useQuery({
    ...options,
    queryKey: ['auth', 'whoami'],
    queryFn: async ({ signal }) => {
      const token = await getAccessToken()

      if (!token) {
        queryClient.setQueryData(['auth', 'whoami'], null)
        throw new Error('No access token, aborting whoami request')
      }

      try {
        return await getWhoami({ signal })
      } catch (error) {
        queryClient.setQueryData(['auth', 'whoami'], null)

        throw error
      }
    },
  })
}

export { useGetWhoami }
