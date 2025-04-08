import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

import { IUpdateEmailRequest } from '../types/IUpdateEmailRequest'

import { updateEmail } from './updateEmail'

const useUpdateEmail = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IUpdateEmailRequest) => updateEmail(body),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['profile'],
          exact: false,
        }),
        queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] }),
      ])

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
