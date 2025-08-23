import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { ILoginByPasswordBody } from '../types/ILoginByPasswordBody'

const loginByPassword = createPostFetcher('/auth/login', 'POST')
const loginByPasswordAdapter = (body: ILoginByPasswordBody) =>
  loginByPassword({ optionsPost: { body } })

const useLoginByPassword = (
  options: TUseMutationOptions<typeof loginByPasswordAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: loginByPasswordAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useLoginByPassword }
