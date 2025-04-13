import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { ImageIcon } from '@shared/icons'
import { TUseMutationOptions } from '@shared/types'
import { useSession } from '@entities/auth/hooks/useSession'

import { setAvatar } from './setAvatar'

const useSetAvatar = (options: TUseMutationOptions<typeof setAvatar> = {}) => {
  const queryClient = useQueryClient()
  const { user } = useSession()

  return useMutation({
    ...options,
    mutationFn: (file: FormData) => setAvatar(file),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['profile', user?.username],
        }),
        queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] }),
      ])

      successToast({
        message:
          'Аватар успешно изменен (Изменения отобразятся в течении минуты)',
        Icon: ImageIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message: `Не удалось изменить аватар: ${message}` })
    },
  })
}

export { useSetAvatar }
