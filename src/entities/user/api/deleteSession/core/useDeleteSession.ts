import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'
import { TUseMutationOptions } from '@shared/types'

import { IDeleteSessionRequest } from '../types/IDeleteSessionRequest'

import { deleteSession } from './deleteSession'

const useDeleteSession = (
  options: TUseMutationOptions<typeof deleteSession> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: (body: IDeleteSessionRequest) => deleteSession(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['account', 'getUserSessions'],
      })

      successToast({
        message: 'Сессия успешно удалена',
        Icon: UserIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось удалить сессию: ${message}`,
      })
    },
  })
}

export { useDeleteSession }
