import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setAvatar } from './setAvatar'
import { errorToast, successToast } from '@shared/utils/toast'
import { ImageIcon } from '@shared/icons'

const useSetAvatar = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (file: FormData) => setAvatar(file),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      successToast({ message: 'Аватар успешно изменен', Icon: ImageIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `Не удалось изменить аватар: ${message}` })
    },
  })
}

export { useSetAvatar }
