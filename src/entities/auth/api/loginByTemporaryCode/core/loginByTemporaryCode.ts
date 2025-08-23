import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { ILoginByTemporaryCodeBody } from '../types/ILoginByTemporaryCodeBody'

const loginByTemporaryCode = createPostFetcher('/auth/temporary/login', 'POST')
const loginByTemporaryCodeAdapter = (body: ILoginByTemporaryCodeBody) =>
  loginByTemporaryCode({ optionsPost: { body } })

const useLoginByTemporaryCode = (
  options: TUseMutationOptions<typeof loginByTemporaryCodeAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: loginByTemporaryCodeAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useLoginByTemporaryCode }
