import { useMutation, useQueryClient } from '@tanstack/react-query'
import { subscribeToUser } from './subscribeToUser'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'
import { ISubscribeToUserRequest } from '../types/ISubscribeToUserRequest'

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
