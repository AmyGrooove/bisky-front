import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteAnimeEstimate } from './deleteAnimeEstimate'
import { IDeleteAnimeEstimateRequest } from '../types/IDeleteAnimeEstimateRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { EyeOffIcon } from '@shared/icons'

const useDeleteAnimeEstimate = (isFromSkipList = false) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IDeleteAnimeEstimateRequest) =>
      deleteAnimeEstimate(body),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['fast'] })
      queryClient.invalidateQueries({ queryKey: ['anime'] })
      if (!isFromSkipList)
        successToast({
          message: 'Статус аниме в списке успешно изменен',
          Icon: EyeOffIcon,
        })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось изменить статус аниме в списке: ${message}`,
      })
    },
  })
}

export { useDeleteAnimeEstimate }
