import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { ISetAnimeScoreBody } from '../types/ISetAnimeScoreBody'

const setAnimeScore = createPostFetcher('/anime/{ID}/score', 'POST')
const setAnimeScoreAdapter = ({
  animeID,
  body,
}: {
  animeID: string
  body: ISetAnimeScoreBody
}) => setAnimeScore({ params: { ID: animeID }, optionsPost: { body } })

const useSetAnimeScore = (
  options: TUseMutationOptions<typeof setAnimeScoreAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: setAnimeScoreAdapter,
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useSetAnimeScore }
