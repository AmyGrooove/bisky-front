import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loginByPassword } from './loginByPassword'
import { ILoginByPasswordRequest } from '../types/ILoginByPasswordRequest'
import { successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

const useLoginByPassword = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ILoginByPasswordRequest) => loginByPassword(body),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      successToast({ message: 'Успешно авторизован', Icon: UserIcon })
    },
  })
}

export { useLoginByPassword }
