import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { IUpdateAvatarBody } from '../types/IUpdateAvatarBody'

const updateAvatar = createPostFetcher('/account/username', 'PATCH')
const updateAvatarAdapter = (body: IUpdateAvatarBody) =>
  updateAvatar({ optionsPost: { body } })

const useUpdateAvatar = (
  options: TUseMutationOptions<typeof updateAvatarAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: updateAvatarAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useUpdateAvatar }
