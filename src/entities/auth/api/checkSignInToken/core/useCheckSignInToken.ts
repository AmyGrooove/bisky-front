import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast } from '@shared/utils/toast'
import { setAccessToken, setRefreshToken } from '@shared/utils/functions'

import { ICheckSignInTokenRequest } from '../types/ICheckSignInTokenRequest'

import { checkSignInToken } from './checkSignInToken'

const useCheckSignInToken = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ICheckSignInTokenRequest) => checkSignInToken(body),
    onSuccess: async (response) => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] })

      successToast({ message: 'Успешно авторизован', Icon: UserIcon })

      await setAccessToken(response.tokens.accessToken)
      await setRefreshToken(response.tokens.refreshToken)
    },
  })
}

export { useCheckSignInToken }
