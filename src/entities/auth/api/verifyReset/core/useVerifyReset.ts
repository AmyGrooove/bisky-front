import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { errorToast, successToast } from '@shared/utils/toast'
import { setAccessToken, setRefreshToken } from '@shared/utils/functions'
import { TUseMutationOptions } from '@shared/types'

import { IVerifyResetRequest } from '../types/IVerifyResetRequest'

import { verifyReset } from './verifyReset'

const useVerifyReset = (
  options: TUseMutationOptions<typeof verifyReset> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: (body: IVerifyResetRequest) => verifyReset(body),
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

      successToast({ message: 'Успешно сброшен', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `Ошибка сброса: ${message}` })
    },
  })
}

export { useVerifyReset }
