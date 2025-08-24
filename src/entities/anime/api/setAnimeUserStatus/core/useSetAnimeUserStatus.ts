import { TUseMutationOptions } from '@shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CassetteTapeIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

import { setAnimeUserStatus } from './setAnimeUserStatus'

const useSetAnimeUserStatus = (
  options: TUseMutationOptions<typeof setAnimeUserStatus> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: setAnimeUserStatus,
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
