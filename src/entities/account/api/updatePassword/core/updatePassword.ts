import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { LockIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { IUpdatePasswordBody } from '../types/IUpdatePasswordBody'

const updatePassword = createPostFetcher('/account/password', 'PATCH')
const updatePasswordAdapter = (body: IUpdatePasswordBody) =>
  updatePassword({ optionsPost: { body } })

const useUpdatePassword = (
  options: TUseMutationOptions<typeof updatePasswordAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: updatePasswordAdapter,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
      ])

      successToast({ message: 'Пароль успешно изменён', Icon: LockIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useUpdatePassword }
