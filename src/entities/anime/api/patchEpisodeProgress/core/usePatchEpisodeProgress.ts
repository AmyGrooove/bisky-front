import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PlayIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { patchEpisodeProgress } from './patchEpisodeProgress'

const usePatchEpisodeProgress = (
  options: TUseMutationOptions<typeof patchEpisodeProgress> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: patchEpisodeProgress,
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
