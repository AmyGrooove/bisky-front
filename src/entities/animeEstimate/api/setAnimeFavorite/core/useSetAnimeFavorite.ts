import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { HeartIcon } from '@shared/icons'
import { TUseMutationOptions } from '@shared/types'
import { useSession } from '@entities/auth/hooks/useSession'

import { ISetAnimeFavoriteRequest } from '../types/ISetAnimeFavoriteRequest'

import { setAnimeFavorite } from './setAnimeFavorite'

const useSetAnimeFavorite = (
  isFastStar = false,
  options: TUseMutationOptions<typeof setAnimeFavorite> = {},
) => {
  const queryClient = useQueryClient()
  const { user } = useSession()

  return useMutation({
    ...options,
    mutationFn: (body: ISetAnimeFavoriteRequest) => setAnimeFavorite(body),
    onSuccess: async (animeID) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['anime', 'fullInfo', animeID],
        }),
        queryClient.invalidateQueries({
          queryKey: ['profile', user?.username, 'history'],
        }),
        queryClient.invalidateQueries({
          queryKey: ['profile', user?.username, 'favoriteAnimes'],
        }),
      ])

      if (isFastStar) return

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
