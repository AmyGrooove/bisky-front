import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateEmail } from './updateEmail'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'
import { IUpdateEmailRequest } from '../types/IUpdateEmailRequest'

const useUpdateEmail = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IUpdateEmailRequest) => updateEmail(body),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      successToast({ message: 'Почта успешно изменена', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось изменить почту: ${message}`,
      })
    },
  })
}

export { useUpdateEmail }
