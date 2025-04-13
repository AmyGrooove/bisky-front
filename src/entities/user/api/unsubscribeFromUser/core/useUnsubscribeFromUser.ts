import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'
import { TUseMutationOptions } from '@shared/types'
import { useSession } from '@entities/auth/hooks/useSession'

import { IUnsubscribeFromUserRequest } from '../types/IUnsubscribeFromUserRequest'

import { unsubscribeFromUser } from './unsubscribeFromUser'

const useUnsubscribeFromUser = (
  options: TUseMutationOptions<typeof unsubscribeFromUser> = {},
) => {
  const queryClient = useQueryClient()
  const { user } = useSession()

  return useMutation({
    ...options,
    mutationFn: (body: IUnsubscribeFromUserRequest) =>
      unsubscribeFromUser(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['profile', user?.username],
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
