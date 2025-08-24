import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { logout } from './logout'

const useLogout = (options: TUseMutationOptions<typeof logout> = {}) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: logout,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({ message: 'Вы вышли из системы', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useLogout }
