import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

import { ISubscribeToUserRequest } from '../types/ISubscribeToUserRequest'

import { subscribeToUser } from './subscribeToUser'

const useSubscribeToUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ISubscribeToUserRequest) => subscribeToUser(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['profile'],
        exact: false,
      })

      successToast({
        message: 'Успешно подписан на пользователя',
        Icon: UserIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось подписаться на пользователя: ${message}`,
      })
    },
  })
}

export { useSubscribeToUser }
