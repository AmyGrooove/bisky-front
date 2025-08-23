import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

const createNewTemporaryCode = createPostFetcher(
  '/auth/temporary/code',
  'PATCH',
)
const createNewTemporaryCodeAdapter = () => createNewTemporaryCode()

const useCreateNewTemporaryCode = (
  options: TUseMutationOptions<typeof createNewTemporaryCodeAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: createNewTemporaryCodeAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useCreateNewTemporaryCode }
