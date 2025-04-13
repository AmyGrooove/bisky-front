import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'
import { TUseMutationOptions } from '@shared/types'
import { useSession } from '@entities/auth/hooks/useSession'

import { IUpdateEmailRequest } from '../types/IUpdateEmailRequest'

import { updateEmail } from './updateEmail'

const useUpdateEmail = (
  options: TUseMutationOptions<typeof updateEmail> = {},
) => {
  const queryClient = useQueryClient()
  const { user } = useSession()

  return useMutation({
    ...options,
    mutationFn: (body: IUpdateEmailRequest) => updateEmail(body),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['profile', user?.username],
        }),
        queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] }),
      ])

      successToast({ message: 'Почта успешно изменена', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось изменить почту: ${message}`,
      })
    },
  })
}

export { useUpdateEmail }
