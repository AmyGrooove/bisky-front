import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'
import { TUseMutationOptions } from '@shared/types'
import { useSession } from '@entities/auth/hooks/useSession'

import { ISubscribeToUserRequest } from '../types/ISubscribeToUserRequest'

import { subscribeToUser } from './subscribeToUser'

const useSubscribeToUser = (
  options: TUseMutationOptions<typeof subscribeToUser> = {},
) => {
  const queryClient = useQueryClient()
  const { user } = useSession()

  return useMutation({
    ...options,
    mutationFn: (body: ISubscribeToUserRequest) => subscribeToUser(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['profile', user?.username],
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
