import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast } from '@shared/utils/toast'
import { setAccessToken, setRefreshToken } from '@shared/utils/functions'

import { IVerifyResetRequest } from '../types/IVerifyResetRequest'

import { verifyReset } from './verifyReset'

const useVerifyReset = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IVerifyResetRequest) => verifyReset(body),
    onSuccess: async (response) => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] })

      successToast({ message: 'Успешно сброшен', Icon: UserIcon })

      await setAccessToken(response.tokens.accessToken)
      await setRefreshToken(response.tokens.refreshToken)
    },
  })
}

export { useVerifyReset }
