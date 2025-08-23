import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

const deleteSession = createPostFetcher('/auth/session/delete', 'DELETE')
const deleteSessionAdapter = () => deleteSession()

const useDeleteSession = (
  options: TUseMutationOptions<typeof deleteSessionAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: deleteSessionAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useDeleteSession }
