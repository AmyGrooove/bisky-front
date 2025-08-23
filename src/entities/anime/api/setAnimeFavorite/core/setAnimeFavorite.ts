import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { StarIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { ISetAnimeFavoriteBody } from '../types/ISetAnimeFavoriteBody'

const setAnimeFavorite = createPostFetcher('/anime/{ID}/favorite', 'POST')
const setAnimeFavoriteAdapter = ({
  animeID,
  body,
}: {
  animeID: string
  body: ISetAnimeFavoriteBody
}) => setAnimeFavorite({ params: { ID: animeID }, optionsPost: { body } })

const useSetAnimeFavorite = (
  options: TUseMutationOptions<typeof setAnimeFavoriteAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: setAnimeFavoriteAdapter,
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

      successToast({ message: 'Аниме добавлено в избранное', Icon: StarIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useSetAnimeFavorite }
