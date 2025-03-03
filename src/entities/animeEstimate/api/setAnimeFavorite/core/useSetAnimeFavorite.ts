import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setAnimeFavorite } from './setAnimeFavorite'
import { ISetAnimeFavoriteRequest } from '../types/ISetAnimeFavoriteRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { HeartIcon } from '@shared/icons'

const useSetAnimeFavorite = (isFastSelect = false) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ISetAnimeFavoriteRequest) => setAnimeFavorite(body),
    onSuccess: async (animeID) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['anime', 'fullInfo', animeID],
        }),
        queryClient.invalidateQueries({
          queryKey: ['profile', 'history'],
          exact: false,
        }),
        queryClient.invalidateQueries({
          queryKey: ['profile', 'favoriteAnimes'],
          exact: false,
        }),
      ])

      if (isFastSelect) return

      await queryClient.invalidateQueries({ queryKey: ['anime', 'fastStar'] })

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
