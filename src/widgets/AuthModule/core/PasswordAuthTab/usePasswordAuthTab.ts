import { useFormContext } from 'react-hook-form'
import { useLoginByPassword } from '@entities/auth/api/loginByPassword'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { closeAdditionalModal, closeModal } from '@widgets/ModalWrapper'
import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'

import { loginSchema } from '../../schemas/loginSchema'
import { IAuthTabProps } from '../../types/IAuthTabProps'

const usePasswordAuthTab = (props: IAuthTabProps) => {
  const { setNewTab, successCallback } = props

  const { push } = useRouter()

  const {
    mutateAsync: loginByPassword,
    isPending,
    isError,
    error,
  } = useLoginByPassword()

  const {
    control,
    formState: { isValid },
    getValues,
  } = useFormContext<z.infer<typeof loginSchema>>()

  const loginUser = async () => {
    if (isPending || !isValid) return

    const { username, password } = getValues()

    await loginByPassword({ username, password })
    closeModal()
    closeAdditionalModal()

    if (successCallback) {
      successCallback()
    } else {
      push(`/user/${username}`)
    }
  }

  useKeyboardShortcut({
    keys: ['enter'],
    callback: () => loginUser(),
  })

  return { control, isValid, setNewTab, isPending, isError, loginUser, error }
}

export { usePasswordAuthTab }
