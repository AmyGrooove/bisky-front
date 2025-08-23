import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
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
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useSetAnimeFavorite }
