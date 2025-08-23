import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

const createNewAccount = createPostFetcher('/auth/temporary', 'POST')
const createNewAccountAdapter = () => createNewAccount()

const useCreateNewAccount = (
  options: TUseMutationOptions<typeof createNewAccountAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: createNewAccountAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useCreateNewAccount }
