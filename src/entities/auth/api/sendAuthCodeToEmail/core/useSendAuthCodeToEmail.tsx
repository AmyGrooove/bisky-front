import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { LockIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { sendAuthCodeToEmail } from './sendAuthCodeToEmail'

const useSendAuthCodeToEmail = (
  options: TUseMutationOptions<typeof sendAuthCodeToEmail> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: sendAuthCodeToEmail,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({ message: 'Код отправлен', Icon: <LockIcon /> })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useSendAuthCodeToEmail }
