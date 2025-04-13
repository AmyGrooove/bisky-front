import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { StarIcon } from '@shared/icons'
import { TUseMutationOptions } from '@shared/types'
import { useSession } from '@entities/auth/hooks/useSession'

import { ISetAnimeScoreRequest } from '../types/ISetAnimeScoreRequest'

import { setAnimeScore } from './setAnimeScore'

const useSetAnimeScore = (
  isFastStar = false,
  options: TUseMutationOptions<typeof setAnimeScore> = {},
) => {
  const queryClient = useQueryClient()
  const { user } = useSession()

  return useMutation({
    ...options,
    mutationFn: (body: ISetAnimeScoreRequest) => setAnimeScore(body),
    onSuccess: async (animeID) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['anime', 'fullInfo', animeID],
        }),
        queryClient.invalidateQueries({
          queryKey: ['profile', user?.username, 'history'],
        }),
      ])

      if (isFastStar) return

      await queryClient.invalidateQueries({ queryKey: ['anime', 'fastStar'] })

      successToast({ message: 'Оценка успешно изменена', Icon: StarIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `Не удалось изменить оценку: ${message}` })
    },
  })
}

export { useSetAnimeScore }
