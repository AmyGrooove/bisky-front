import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
import { errorToast, successToast } from '@shared/utils/toast'
import { setAccessToken, setRefreshToken } from '@shared/utils/functions'
import { TUseMutationOptions } from '@shared/types'

import { createTemporaryProfile } from './createTemporaryProfile'

const useCreateTemporaryProfile = (
  options: TUseMutationOptions<typeof createTemporaryProfile> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: () => createTemporaryProfile(),
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

      successToast({
        message: 'Временный аккаунт успешно создан',
        Icon: UserIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({ message: `Ошибка создания временного аккаунта: ${message}` })
    },
  })
}

export { useCreateTemporaryProfile }
