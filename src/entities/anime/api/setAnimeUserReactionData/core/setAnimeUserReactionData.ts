import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { ISetAnimeUserReactionDataBody } from '../types/ISetAnimeUserReactionDataBody'

const setAnimeUserReactionData = createPostFetcher(
  '/anime/{ID}/userReaction',
  'PATCH',
)
const setAnimeUserReactionDataAdapter = ({
  animeID,
  body,
}: {
  animeID: string
  body: ISetAnimeUserReactionDataBody
}) =>
  setAnimeUserReactionData({ params: { ID: animeID }, optionsPost: { body } })

const useSetAnimeUserReactionData = (
  options: TUseMutationOptions<typeof setAnimeUserReactionDataAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: setAnimeUserReactionDataAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useSetAnimeUserReactionData }
