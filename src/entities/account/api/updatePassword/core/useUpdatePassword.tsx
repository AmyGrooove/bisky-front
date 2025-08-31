import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { LockIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { updatePassword } from './updatePassword'

const useUpdatePassword = (
  options: TUseMutationOptions<typeof updatePassword> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: updatePassword,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({ message: 'Пароль успешно изменён', Icon: <LockIcon /> })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useUpdatePassword }
