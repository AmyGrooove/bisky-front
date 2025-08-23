import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
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
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useSetAnimeUserStatus }
