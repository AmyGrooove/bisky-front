import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { KeyRoundIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { deleteSession } from './deleteSession'

const useDeleteSession = (
  options: TUseMutationOptions<typeof deleteSession> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: deleteSession,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({
        message: 'Вы успешно удалили сессию',
        Icon: <KeyRoundIcon />,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useDeleteSession }
