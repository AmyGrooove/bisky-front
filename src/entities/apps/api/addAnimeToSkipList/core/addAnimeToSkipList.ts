import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { successToast, errorToast } from '@shared/utils/toast'
import { StarOffIcon } from '@shared/icons'

import { IAddAnimeToSkipListBody } from '../types/IAddAnimeToSkipListBody'

const addAnimeToSkipList = createPostFetcher('/aniPick/skipList', 'POST')
const addAnimeToSkipListAdapter = (body: IAddAnimeToSkipListBody) =>
  addAnimeToSkipList({ optionsPost: { body } })

const useAddAnimeToSkipList = (
  options: TUseMutationOptions<typeof addAnimeToSkipListAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: addAnimeToSkipListAdapter,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['aniPick'] }),
        queryClient.invalidateQueries({ queryKey: ['aniJudge'] }),
        queryClient.invalidateQueries({ queryKey: ['aniBattle'] }),
      ])

      successToast({
        message: 'Аниме добавлено в пропущенное',
        Icon: StarOffIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useAddAnimeToSkipList }
