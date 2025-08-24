import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { updateEmail } from './updateEmail'

const useUpdateEmail = (
  options: TUseMutationOptions<typeof updateEmail> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: updateEmail,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useUpdateEmail }
