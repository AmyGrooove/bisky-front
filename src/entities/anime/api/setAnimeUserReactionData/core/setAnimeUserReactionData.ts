import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CassetteTapeIcon } from '@shared/icons'
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
        message: 'Рeакция на аниме обновлена',
        Icon: CassetteTapeIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useSetAnimeUserReactionData }
