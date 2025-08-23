import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { IUpdateUsernameBody } from '../types/IUpdateUsernameBody'

const updateUsername = createPostFetcher('/account/username', 'PATCH')
const updateUsernameAdapter = (body: IUpdateUsernameBody) =>
  updateUsername({ optionsPost: { body } })

const useUpdateUsername = (
  options: TUseMutationOptions<typeof updateUsernameAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: updateUsernameAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useUpdateUsername }
