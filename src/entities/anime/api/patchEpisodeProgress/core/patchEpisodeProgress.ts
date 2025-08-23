import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { IPatchEpisodeProgressBody } from '../types/IPatchEpisodeProgressBody'

const patchEpisodeProgress = createPostFetcher('/account/password', 'PATCH')
const patchEpisodeProgressAdapter = (body: IPatchEpisodeProgressBody) =>
  patchEpisodeProgress({ optionsPost: { body } })

const usePatchEpisodeProgress = (
  options: TUseMutationOptions<typeof patchEpisodeProgressAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: patchEpisodeProgressAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { usePatchEpisodeProgress }
