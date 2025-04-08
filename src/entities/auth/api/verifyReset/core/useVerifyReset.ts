import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast } from '@shared/utils/toast'

import { IVerifyResetRequest } from '../types/IVerifyResetRequest'

import { verifyReset } from './verifyReset'

const useVerifyReset = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IVerifyResetRequest) => verifyReset(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] })

      successToast({ message: 'Успешно сброшен', Icon: UserIcon })
    },
  })
}

export { useVerifyReset }
