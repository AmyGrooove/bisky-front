import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { StarIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { setAnimeFavorite } from './setAnimeFavorite'

const useSetAnimeFavorite = (
  options: TUseMutationOptions<typeof setAnimeFavorite> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: setAnimeFavorite,
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
        message: 'Аниме добавлено в избранное',
        Icon: <StarIcon />,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useSetAnimeFavorite }
