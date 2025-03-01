import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setAnimeEstimate } from './setAnimeEstimate'
import { ISetAnimeEstimateRequest } from '../types/ISetAnimeEstimateRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { CassetteTapeIcon } from '@shared/icons'

const useSetAnimeEstimate = (isFastFind = false) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ISetAnimeEstimateRequest) => setAnimeEstimate(body),
    onSuccess: async () => {
      if (isFastFind) return

      queryClient.invalidateQueries({ queryKey: ['anime'] })
      successToast({
        message: 'Статус аниме в списке успешно изменен',
        Icon: CassetteTapeIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось изменить статус аниме в списке: ${message}`,
      })
    },
  })
}

export { useSetAnimeEstimate }
