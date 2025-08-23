import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { IUpdateEmailBody } from '../types/IUpdateEmailBody'

const updateEmail = createPostFetcher('/account/email', 'PATCH')
const updateEmailAdapter = (body: IUpdateEmailBody) =>
  updateEmail({ optionsPost: { body } })

const useUpdateEmail = (
  options: TUseMutationOptions<typeof updateEmailAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: updateEmailAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useUpdateEmail }
