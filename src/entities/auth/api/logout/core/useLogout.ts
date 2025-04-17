import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserXIcon } from '@shared/icons'
import { deleteAccessToken, deleteRefreshToken } from '@shared/utils/functions'
import { TUseMutationOptions } from '@shared/types'
import { useRouter } from 'next/navigation'

import { logout } from './logout'

const useLogout = (options: TUseMutationOptions<typeof logout> = {}) => {
  const { push } = useRouter()
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

      successToast({ message: 'Успешно вышел из системы', Icon: UserXIcon })

      setTimeout(() => push('/'), 200)
    },
    onError: async ({ message }) => {
      errorToast({ message: `Ошибка выхода: ${message}` })
    },
  })
}

export { useLogout }
