import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'
import { TUseMutationOptions } from '@shared/types'
import { useSession } from '@entities/auth/hooks/useSession'

import { IUpdateUsernameRequest } from '../types/IUpdateUsernameRequest'

import { updateUsername } from './updateUsername'

const useUpdateUsername = (
  options: TUseMutationOptions<typeof updateUsername> = {},
) => {
  const queryClient = useQueryClient()
  const { user } = useSession()

  return useMutation({
    ...options,
    mutationFn: (body: IUpdateUsernameRequest) => updateUsername(body),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['profile', user?.username],
        }),
        queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] }),
      ])

      successToast({ message: 'Логин успешно изменен', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `Не удалось изменить логин: ${message}` })
    },
  })
}

export { useUpdateUsername }
