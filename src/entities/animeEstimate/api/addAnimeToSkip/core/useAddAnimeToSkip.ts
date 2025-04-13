import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { CassetteTapeIcon } from '@shared/icons'
import { TUseMutationOptions } from '@shared/types'
import { useSession } from '@entities/auth/hooks/useSession'

import { IAddAnimeToSkipRequest } from '../types/IAddAnimeToSkipRequest'

import { addAnimeToSkip } from './addAnimeToSkip'

const useAddAnimeToSkip = (
  isFastFind = false,
  options: TUseMutationOptions<typeof addAnimeToSkip> = {},
) => {
  const queryClient = useQueryClient()
  const { user } = useSession()

  return useMutation({
    ...options,
    mutationFn: (body: IAddAnimeToSkipRequest) => addAnimeToSkip(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['profile', user?.username, 'history'],
      })

      if (isFastFind) return

      await queryClient.invalidateQueries({ queryKey: ['anime', 'fastFind'] })

      successToast({
        message: 'Аниме успешно добавлено в список исключаемых',
        Icon: CassetteTapeIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось добавить аниме в исключаемые: ${message}`,
      })
    },
  })
}

export { useAddAnimeToSkip }
