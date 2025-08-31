import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { updateUsername } from './updateUsername'

const useUpdateUsername = (
  options: TUseMutationOptions<typeof updateUsername> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: updateUsername,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
        queryClient.invalidateQueries({ queryKey: ['profile'], exact: false }),
      ])

      successToast({ message: 'Username успешно изменён', Icon: <UserIcon /> })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useUpdateUsername }
