import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MailIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { confirmAuthCodeAndLogin } from './confirmAuthCodeAndLogin'

const useConfirmAuthCodeAndLogin = (
  options: TUseMutationOptions<typeof confirmAuthCodeAndLogin> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: confirmAuthCodeAndLogin,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({
        message: 'Успешный вход',
        Icon: <MailIcon />,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useConfirmAuthCodeAndLogin }
