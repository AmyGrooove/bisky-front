import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

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
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useAddAnimeToSkipList }
