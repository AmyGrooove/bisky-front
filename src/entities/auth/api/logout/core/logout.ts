import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

const logout = createPostFetcher('/auth/logout', 'POST')
const logoutAdapter = () => logout()

const useLogout = (options: TUseMutationOptions<typeof logoutAdapter> = {}) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: logoutAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useLogout }
