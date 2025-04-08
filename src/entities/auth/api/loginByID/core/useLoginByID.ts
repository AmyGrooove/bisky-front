import { useMutation, useQueryClient } from '@tanstack/react-query'
import { successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

import { ILoginByIDRequest } from '../types/ILoginByIDRequest'

import { loginByID } from './loginByID'

const useLoginByID = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ILoginByIDRequest) => loginByID(body),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account', 'getUserID'] }),
        queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] }),
      ])

      successToast({ message: 'Успешно авторизован', Icon: UserIcon })
    },
  })
}

export { useLoginByID }
