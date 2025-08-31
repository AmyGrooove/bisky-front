import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TrashIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { deleteAnimeUserReaction } from './deleteAnimeUserReaction'

const useDeleteAnimeUserReaction = (
  options: TUseMutationOptions<typeof deleteAnimeUserReaction> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: deleteAnimeUserReaction,
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

      successToast({ message: 'Аниме удалено из списка', Icon: <TrashIcon /> })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useDeleteAnimeUserReaction }
