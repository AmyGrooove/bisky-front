import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MailIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { sendToEmailResetPassword } from './sendToEmailResetPassword'

const useSendToEmailResetPassword = (
  options: TUseMutationOptions<typeof sendToEmailResetPassword> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: sendToEmailResetPassword,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({
        message: 'Заявка на сброс пароля отправлена',
        Icon: MailIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useSendToEmailResetPassword }
