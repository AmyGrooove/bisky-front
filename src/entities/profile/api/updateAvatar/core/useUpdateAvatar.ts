import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ImageIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { updateAvatar } from './updateAvatar'

const useUpdateAvatar = (
  options: TUseMutationOptions<typeof updateAvatar> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: updateAvatar,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
        queryClient.invalidateQueries({ queryKey: ['profile'], exact: false }),
      ])

      successToast({ message: 'Аватар обновлен', Icon: ImageIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useUpdateAvatar }
