import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { IUpdateNicknameBody } from '../types/IUpdateNicknameBody'

const updateNickname = createPostFetcher('/account/nickname', 'PATCH')
const updateNicknameAdapter = (body: IUpdateNicknameBody) =>
  updateNickname({ optionsPost: { body } })

const useUpdateNickname = (
  options: TUseMutationOptions<typeof updateNicknameAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: updateNicknameAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useUpdateNickname }
