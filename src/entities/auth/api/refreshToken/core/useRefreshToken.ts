import { useMutation, useQueryClient } from '@tanstack/react-query'
import { refreshToken } from './refreshToken'
import { IRefreshTokenRequest } from '../types/IRefreshTokenRequest'

const useRefreshToken = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IRefreshTokenRequest) => refreshToken(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] })
    },
  })
}

export { useRefreshToken }
