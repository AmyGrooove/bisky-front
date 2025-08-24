import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ImageIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { deleteAvatar } from './deleteAvatar'

const useDeleteAvatar = (
  options: TUseMutationOptions<typeof deleteAvatar> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: deleteAvatar,
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
