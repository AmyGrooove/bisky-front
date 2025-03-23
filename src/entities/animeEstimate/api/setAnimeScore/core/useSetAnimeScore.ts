import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setAnimeScore } from './setAnimeScore'
import { ISetAnimeScoreRequest } from '../types/ISetAnimeScoreRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { StarIcon } from '@shared/icons'

const useSetAnimeScore = (isFastStar = false) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ISetAnimeScoreRequest) => setAnimeScore(body),
    onSuccess: async (animeID) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['anime', 'fullInfo', animeID],
        }),
        queryClient.invalidateQueries({
          queryKey: ['genre', 'animes'],
          exact: false,
        }),
        queryClient.invalidateQueries({
          queryKey: ['profile', 'history'],
          exact: false,
        }),
        queryClient.invalidateQueries({
          queryKey: ['franchise', 'animes'],
          exact: false,
        }),
        queryClient.invalidateQueries({
          queryKey: ['studio', 'animes'],
          exact: false,
        }),
        queryClient.invalidateQueries({ queryKey: ['blocks', 'row'] }),
        queryClient.invalidateQueries({ queryKey: ['blocks'] }),
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
