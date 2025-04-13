import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'
import { setAccessToken, setRefreshToken } from '@shared/utils/functions'
import { TUseMutationOptions } from '@shared/types'

import { ILoginByIDRequest } from '../types/ILoginByIDRequest'

import { loginByID } from './loginByID'

const useLoginByID = (options: TUseMutationOptions<typeof loginByID> = {}) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: (body: ILoginByIDRequest) => loginByID(body),
    onSuccess: async (response) => {
      await Promise.all([
        setAccessToken(response.tokens.accessToken),
        setRefreshToken(response.tokens.refreshToken),
      ])

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account', 'getUserID'] }),
        queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] }),
        queryClient.invalidateQueries({
          queryKey: ['account', 'getUserOAuthIDs'],
        }),
        queryClient.invalidateQueries({
          queryKey: ['account', 'getUserSessions'],
        }),
      ])

      successToast({ message: 'Успешно авторизован', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `Ошибка авторизации: ${message}` })
    },
  })
}

export { useLoginByID }
