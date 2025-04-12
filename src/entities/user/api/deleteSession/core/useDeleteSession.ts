import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

import { IDeleteSessionRequest } from '../types/IDeleteSessionRequest'

import { deleteSession } from './deleteSession'

const useDeleteSession = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IDeleteSessionRequest) => deleteSession(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['account', 'getUserSessions'],
        exact: false,
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
