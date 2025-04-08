import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

import { IUpdateUsernameRequest } from '../types/IUpdateUsernameRequest'

import { updateUsername } from './updateUsername'

const useUpdateUsername = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IUpdateUsernameRequest) => updateUsername(body),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['profile'],
          exact: false,
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
