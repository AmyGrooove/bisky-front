import { useMutation, useQueryClient } from '@tanstack/react-query'
import { changePassword } from './changePassword'
import { IChangePasswordRequest } from '../types/IChangePasswordRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

const useChangePassword = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IChangePasswordRequest) => changePassword(body),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      successToast({ message: 'Пароль успешно изменен', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `Не удалось изменить пароль: ${message}` })
    },
  })
}

export { useChangePassword }
