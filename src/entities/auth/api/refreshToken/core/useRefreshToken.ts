import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setAccessToken, setRefreshToken } from '@shared/utils/functions'

import { refreshToken } from './refreshToken'

const useRefreshToken = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => refreshToken(),
    onSuccess: async (response) => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] })

      await setAccessToken(response.tokens.accessToken)
      await setRefreshToken(response.tokens.refreshToken)
    },
  })
}

export { useRefreshToken }
