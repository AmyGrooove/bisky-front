import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ImageIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

const deleteAvatar = createPostFetcher('/account/avatar', 'DELETE')
const deleteAvatarAdapter = () => deleteAvatar()

const useDeleteAvatar = (
  options: TUseMutationOptions<typeof deleteAvatarAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: deleteAvatarAdapter,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
        queryClient.invalidateQueries({ queryKey: ['profile'], exact: false }),
      ])

      successToast({ message: 'Аватар удален', Icon: ImageIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useDeleteAvatar }
