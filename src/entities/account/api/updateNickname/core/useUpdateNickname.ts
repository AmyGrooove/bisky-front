import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { updateNickname } from './updateNickname'

const useUpdateNickname = (
  options: TUseMutationOptions<typeof updateNickname> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: updateNickname,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
        queryClient.invalidateQueries({ queryKey: ['profile'], exact: false }),
      ])

      successToast({ message: 'Nickname успешно изменён', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useUpdateNickname }
