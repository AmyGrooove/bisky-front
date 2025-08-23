import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { LockIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { IConfirmCodeAndUpdatePasswordBody } from '../types/IConfirmCodeAndUpdatePasswordBody'

const confirmCodeAndUpdatePassword = createPostFetcher(
  '/account/password/reset',
  'PATCH',
)
const confirmCodeAndUpdatePasswordAdapter = (
  body: IConfirmCodeAndUpdatePasswordBody,
) => confirmCodeAndUpdatePassword({ optionsPost: { body } })

const useConfirmCodeAndUpdatePassword = (
  options: TUseMutationOptions<typeof confirmCodeAndUpdatePasswordAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: confirmCodeAndUpdatePasswordAdapter,
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

export { useConfirmCodeAndUpdatePassword }
