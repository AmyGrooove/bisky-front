import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

const logout = createPostFetcher('/auth/logout', 'POST')
const logoutAdapter = () =>
  logout({ optionsPost: { tokenType: 'refreshToken' } })

const useLogout = (options: TUseMutationOptions<typeof logoutAdapter> = {}) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: logoutAdapter,
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
