import { useMutation, useQueryClient } from '@tanstack/react-query'
import { logout } from './logout'
import { successToast } from '@shared/utils/toast'
import { UserXIcon } from '@shared/icons'

const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] })

      successToast({ message: 'Успешно вышел из системы', Icon: UserXIcon })
    },
  })
}

export { useLogout }
