import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PlayIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { IPatchEpisodeProgressBody } from '../types/IPatchEpisodeProgressBody'

const patchEpisodeProgress = createPostFetcher('/anime/episode/{ID}', 'PATCH')
const patchEpisodeProgressAdapter = ({
  body,
  episodeID,
}: {
  body: IPatchEpisodeProgressBody
  episodeID: string
}) => patchEpisodeProgress({ params: { ID: episodeID }, optionsPost: { body } })

const usePatchEpisodeProgress = (
  options: TUseMutationOptions<typeof patchEpisodeProgressAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: patchEpisodeProgressAdapter,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['profile'], exact: false }),
      ])

      successToast({ message: 'Прогресс эпизода обновлен', Icon: PlayIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { usePatchEpisodeProgress }
