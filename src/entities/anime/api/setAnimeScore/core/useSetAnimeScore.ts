import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { StarIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { setAnimeScore } from './setAnimeScore'

const useSetAnimeScore = (
  options: TUseMutationOptions<typeof setAnimeScore> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: setAnimeScore,
    onSuccess: async ({ query }) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['anime', query?.ID],
          exact: false,
        }),
        queryClient.invalidateQueries({ queryKey: ['profile'], exact: false }),
        queryClient.invalidateQueries({ queryKey: ['aniPick'] }),
        queryClient.invalidateQueries({ queryKey: ['aniJudge'] }),
        queryClient.invalidateQueries({ queryKey: ['aniBattle'] }),
      ])

      successToast({
        message: 'Оценка аниме обновлена',
        Icon: StarIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useSetAnimeScore }
