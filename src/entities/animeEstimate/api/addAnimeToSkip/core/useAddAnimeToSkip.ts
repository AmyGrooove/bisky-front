import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { CassetteTapeIcon } from '@shared/icons'

import { IAddAnimeToSkipRequest } from '../types/IAddAnimeToSkipRequest'

import { addAnimeToSkip } from './addAnimeToSkip'

const useAddAnimeToSkip = (isFastFind = false) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IAddAnimeToSkipRequest) => addAnimeToSkip(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['profile', 'history'],
        exact: false,
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
