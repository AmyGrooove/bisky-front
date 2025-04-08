import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

import { IUnsubscribeFromUserRequest } from '../types/IUnsubscribeFromUserRequest'

import { unsubscribeFromUser } from './unsubscribeFromUser'

const useUnsubscribeFromUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IUnsubscribeFromUserRequest) =>
      unsubscribeFromUser(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['profile'],
        exact: false,
      })

      successToast({
        message: 'Успешно отписан от пользователя',
        Icon: UserIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось отписаться на пользователя: ${message}`,
      })
    },
  })
}

export { useUnsubscribeFromUser }
