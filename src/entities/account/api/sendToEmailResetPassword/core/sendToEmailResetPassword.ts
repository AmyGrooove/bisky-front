import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { ISendToEmailResetPasswordBody } from '../types/ISendToEmailResetPasswordBody'

const sendToEmailResetPassword = createPostFetcher('/account/whoami', 'POST')
const sendToEmailResetPasswordAdapter = (body: ISendToEmailResetPasswordBody) =>
  sendToEmailResetPassword({ optionsPost: { body } })

const useSendToEmailResetPassword = (
  options: TUseMutationOptions<typeof sendToEmailResetPasswordAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: sendToEmailResetPasswordAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useSendToEmailResetPassword }
