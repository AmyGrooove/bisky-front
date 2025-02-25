import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setAnimeScore } from './setAnimeScore'
import { ISetAnimeScoreRequest } from '../types/ISetAnimeScoreRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { StarIcon } from '@shared/icons'

const useSetAnimeScore = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ISetAnimeScoreRequest) => setAnimeScore(body),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['fast'] })
      queryClient.invalidateQueries({ queryKey: ['anime'] })
      successToast({ message: 'Оценка успешно изменена', Icon: StarIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `Не удалось изменить оценку: ${message}` })
    },
  })
}

export { useSetAnimeScore }
