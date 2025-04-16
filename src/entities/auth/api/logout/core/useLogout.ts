import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserXIcon } from '@shared/icons'
import { deleteAccessToken, deleteRefreshToken } from '@shared/utils/functions'
import { TUseMutationOptions } from '@shared/types'
import {
  resetSessionError,
  resetUserData,
} from '@entities/auth/hooks/useSession'

import { logout } from './logout'

const useLogout = (options: TUseMutationOptions<typeof logout> = {}) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: () => logout(),
    onSuccess: async () => {
      await Promise.all([
        deleteAccessToken(),
        deleteRefreshToken(),
        queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] }),
      ])

      queryClient.clear()
      resetUserData()
      resetSessionError()

      successToast({ message: 'Успешно вышел из системы', Icon: UserXIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `Ошибка выхода: ${message}` })
    },
  })
}

export { useLogout }
