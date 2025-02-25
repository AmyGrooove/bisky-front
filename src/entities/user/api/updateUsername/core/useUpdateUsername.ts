import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateUsername } from './updateUsername'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'
import { IUpdateUsernameRequest } from '../types/IUpdateUsernameRequest'

const useUpdateUsername = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IUpdateUsernameRequest) => updateUsername(body),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      successToast({ message: 'Логин успешно изменен', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `Не удалось изменить логин: ${message}` })
    },
  })
}

export { useUpdateUsername }
