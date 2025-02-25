import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addAnimeToSkip } from './addAnimeToSkip'
import { IAddAnimeToSkipRequest } from '../types/IAddAnimeToSkipRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { CassetteTapeIcon } from '@shared/icons'

const useAddAnimeToSkip = (isFastFind = false) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IAddAnimeToSkipRequest) => addAnimeToSkip(body),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['fast'] })
      if (!isFastFind)
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
