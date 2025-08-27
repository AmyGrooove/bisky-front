import { useFormContext } from 'react-hook-form'
import { useLoginByPassword } from '@entities/auth/api/loginByPassword'
import { z } from 'zod'
import { closeModal } from '@widgets/ModalWrapper'
import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'

import { loginSchema } from '../../schemas/loginSchema'
import { IAuthTabProps } from '../../types/IAuthTabProps'

const usePasswordAuthTab = (props: IAuthTabProps) => {
  const { setNewTab, successCallback } = props

  const {
    mutateAsync: loginByPassword,
    isPending,
    isError,
    error,
  } = useLoginByPassword()

  const {
    control,
    formState: { isValid, errors },
    getValues,
  } = useFormContext<z.infer<typeof loginSchema>>()

  const loginUser = async () => {
    if (isPending || !isValid) return

    const { username, password } = getValues()

    await loginByPassword({ username, password })

    if (successCallback) {
      successCallback()
    } else {
      closeModal()
    }
  }

  useKeyboardShortcut({
    keys: ['enter'],
    callback: loginUser,
  })

  return {
    control,
    isValid,
    setNewTab,
    isPending,
    isError,
    loginUser,
    error,
    errors,
  }
}

export { usePasswordAuthTab }
