import { useMutation, useQueryClient } from '@tanstack/react-query'
import { successToast } from '@shared/utils/toast'
import { UserXIcon } from '@shared/icons'
import { deleteAccessToken, deleteRefreshToken } from '@shared/utils/functions'

import { logout } from './logout'

const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] })

      await deleteAccessToken()
      await deleteRefreshToken()

      successToast({ message: 'Успешно вышел из системы', Icon: UserXIcon })
    },
  })
}

export { useLogout }
