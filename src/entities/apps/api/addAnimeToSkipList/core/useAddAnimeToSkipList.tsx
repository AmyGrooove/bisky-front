import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { successToast, errorToast } from '@shared/utils/toast'
import { StarOffIcon } from '@shared/icons'

import { addAnimeToSkipList } from './addAnimeToSkipList'

const useAddAnimeToSkipList = (
  options: TUseMutationOptions<typeof addAnimeToSkipList> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: addAnimeToSkipList,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['aniPick'] }),
        queryClient.invalidateQueries({ queryKey: ['aniJudge'] }),
        queryClient.invalidateQueries({ queryKey: ['aniBattle'] }),
      ])

      successToast({
        message: 'Аниме добавлено в пропущенное',
        Icon: <StarOffIcon />,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useAddAnimeToSkipList }
