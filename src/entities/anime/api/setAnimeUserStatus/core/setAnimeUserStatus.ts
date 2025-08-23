import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CassetteTapeIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { ISetAnimeUserStatusBody } from '../types/ISetAnimeUserStatusBody'

const setAnimeUserStatus = createPostFetcher('/anime/{ID}/userStatus', 'POST')
const setAnimeUserStatusAdapter = ({
  animeID,
  body,
}: {
  animeID: string
  body: ISetAnimeUserStatusBody
}) => setAnimeUserStatus({ params: { ID: animeID }, optionsPost: { body } })

const useSetAnimeUserStatus = (
  options: TUseMutationOptions<typeof setAnimeUserStatusAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: setAnimeUserStatusAdapter,
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
        message: 'Аниме добавлено в список',
        Icon: CassetteTapeIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useSetAnimeUserStatus }
