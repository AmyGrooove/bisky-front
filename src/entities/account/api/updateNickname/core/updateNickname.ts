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
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account'] }),
        queryClient.invalidateQueries({ queryKey: ['account', 'whoami'] }),
        queryClient.invalidateQueries({ queryKey: ['profile'], exact: false }),
      ])

      successToast({ message: 'Nickname успешно изменён', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useUpdateNickname }
