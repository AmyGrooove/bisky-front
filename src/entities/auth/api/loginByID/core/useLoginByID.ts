import { useMutation, useQueryClient } from '@tanstack/react-query'
import { successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'
import { setAccessToken, setRefreshToken } from '@shared/utils/functions'

import { ILoginByIDRequest } from '../types/ILoginByIDRequest'

import { loginByID } from './loginByID'

const useLoginByID = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ILoginByIDRequest) => loginByID(body),
    onSuccess: async (response) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account', 'getUserID'] }),
        queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] }),
      ])

      successToast({ message: 'Успешно авторизован', Icon: UserIcon })

      await setAccessToken(response.tokens.accessToken)
      await setRefreshToken(response.tokens.refreshToken)
    },
  })
}

export { useLoginByID }
