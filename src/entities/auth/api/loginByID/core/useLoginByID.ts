import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loginByID } from './loginByID'
import { ILoginByIDRequest } from '../types/ILoginByIDRequest'
import { successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

const useLoginByID = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ILoginByIDRequest) => loginByID(body),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      successToast({ message: 'Успешно авторизован', Icon: UserIcon })
    },
  })
}

export { useLoginByID }
