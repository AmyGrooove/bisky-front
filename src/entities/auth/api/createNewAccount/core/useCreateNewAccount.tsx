import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { createNewAccount } from './createNewAccount'

const useCreateNewAccount = (
  options: TUseMutationOptions<typeof createNewAccount> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: createNewAccount,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({
        message: 'Вы успешно создали аккаунт',
        Icon: <UserIcon />,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useCreateNewAccount }
