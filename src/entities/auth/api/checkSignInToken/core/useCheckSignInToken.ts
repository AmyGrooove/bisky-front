import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast } from '@shared/utils/toast'

import { ICheckSignInTokenRequest } from '../types/ICheckSignInTokenRequest'

import { checkSignInToken } from './checkSignInToken'

const useCheckSignInToken = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ICheckSignInTokenRequest) => checkSignInToken(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] })

      successToast({ message: 'Успешно авторизован', Icon: UserIcon })
    },
  })
}

export { useCheckSignInToken }
