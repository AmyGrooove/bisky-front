import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTemporaryProfile } from './createTemporaryProfile'
import { UserIcon } from '@shared/icons'
import { successToast } from '@shared/utils/toast'

const useCreateTemporaryProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => createTemporaryProfile(),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'whoami'] })

      successToast({ message: 'Успешно создан', Icon: UserIcon })
    },
  })
}

export { useCreateTemporaryProfile }
