import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setAnimeFavorite } from './setAnimeFavorite'
import { ISetAnimeFavoriteRequest } from '../types/ISetAnimeFavoriteRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { HeartIcon } from '@shared/icons'

const useSetAnimeFavorite = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ISetAnimeFavoriteRequest) => setAnimeFavorite(body),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['fast'] })
      queryClient.invalidateQueries({ queryKey: ['anime'] })
      successToast({
        message: 'Статус избранного аниме успешно изменен',
        Icon: HeartIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось изменить статус избранного аниме: ${message}`,
      })
    },
  })
}

export { useSetAnimeFavorite }
