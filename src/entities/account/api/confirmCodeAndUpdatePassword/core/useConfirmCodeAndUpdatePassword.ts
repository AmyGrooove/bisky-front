import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { LockIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { confirmCodeAndUpdatePassword } from './confirmCodeAndUpdatePassword'

const useConfirmCodeAndUpdatePassword = (
  options: TUseMutationOptions<typeof confirmCodeAndUpdatePassword> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: confirmCodeAndUpdatePassword,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({ message: 'Пароль успешно изменён', Icon: LockIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useConfirmCodeAndUpdatePassword }
