import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
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
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useConfirmCodeAndUpdatePassword }
