import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { loginByPassword } from './loginByPassword'

const useLoginByPassword = (
  options: TUseMutationOptions<typeof loginByPassword> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: loginByPassword,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({ message: 'Вы вошли в систему', Icon: <UserIcon /> })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useLoginByPassword }
