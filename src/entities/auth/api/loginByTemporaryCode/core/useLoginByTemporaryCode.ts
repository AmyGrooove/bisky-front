import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { loginByTemporaryCode } from './loginByTemporaryCode'

const useLoginByTemporaryCode = (
  options: TUseMutationOptions<typeof loginByTemporaryCode> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: loginByTemporaryCode,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({ message: 'Вы вошли в систему', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useLoginByTemporaryCode }
