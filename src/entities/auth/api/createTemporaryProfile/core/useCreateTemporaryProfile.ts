import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { successToast } from '@shared/utils/toast'
import { setAccessToken, setRefreshToken } from '@shared/utils/functions'

import { createTemporaryProfile } from './createTemporaryProfile'

const useCreateTemporaryProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => createTemporaryProfile(),
    onSuccess: async (response) => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] })

      successToast({ message: 'Успешно создан', Icon: UserIcon })

      await setAccessToken(response.tokens.accessToken)
      await setRefreshToken(response.tokens.refreshToken)
    },
  })
}

export { useCreateTemporaryProfile }
