import { useMutation, useQueryClient } from '@tanstack/react-query'
import { successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

import { ILoginByPasswordRequest } from '../types/ILoginByPasswordRequest'

import { loginByPassword } from './loginByPassword'

const useLoginByPassword = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ILoginByPasswordRequest) => loginByPassword(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] })

      successToast({ message: 'Успешно авторизован', Icon: UserIcon })
    },
  })
}

export { useLoginByPassword }
