import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { KeyRoundIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

const deleteSession = createPostFetcher('/auth/session/delete', 'DELETE')
const deleteSessionAdapter = () =>
  deleteSession({ optionsPost: { tokenType: 'refreshToken' } })

const useDeleteSession = (
  options: TUseMutationOptions<typeof deleteSessionAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: deleteSessionAdapter,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({
        message: 'Вы успешно удалили сессию',
        Icon: KeyRoundIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useDeleteSession }
