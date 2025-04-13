import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setAccessToken, setRefreshToken } from '@shared/utils/functions'
import { TUseMutationOptions } from '@shared/types'

import { refreshToken } from './refreshToken'

const useRefreshToken = (
  options: TUseMutationOptions<typeof refreshToken> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: () => refreshToken(),
    onSuccess: async (response) => {
      await Promise.all([
        setAccessToken(response.tokens.accessToken),
        setRefreshToken(response.tokens.refreshToken),
      ])

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] }),
        queryClient.invalidateQueries({
          queryKey: ['account', 'getUserSessions'],
        }),
      ])
    },
  })
}

export { useRefreshToken }
