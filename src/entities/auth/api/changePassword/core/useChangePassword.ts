import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

import { IChangePasswordRequest } from '../types/IChangePasswordRequest'

import { changePassword } from './changePassword'

const useChangePassword = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IChangePasswordRequest) => changePassword(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] })

      successToast({ message: 'Пароль успешно изменен', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `Не удалось изменить пароль: ${message}` })
    },
  })
}

export { useChangePassword }
