import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { createNewTemporaryCode } from './createNewTemporaryCode'

const useCreateNewTemporaryCode = (
  options: TUseMutationOptions<typeof createNewTemporaryCode> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: createNewTemporaryCode,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({
        message: 'Вы успешно создали новый временный код',
        Icon: UserIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useCreateNewTemporaryCode }
