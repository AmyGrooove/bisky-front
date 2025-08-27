import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { closeModal } from '@widgets/ModalWrapper'
import { useCooldown } from '@shared/utils/hooks/useCooldown'
import { useSendAuthCodeToEmail } from '@entities/auth/api/sendAuthCodeToEmail'
import { useConfirmAuthCodeAndLogin } from '@entities/auth/api/confirmAuthCodeAndLogin'

import { IEmailTabProps } from '../../types/IEmailTabProps'
import { codeSchema } from '../../schemas/codeSchema'

const useCheckCodeTab = (props: IEmailTabProps) => {
  const { setNewTab, form, successCallback } = props

  const { timeLeft, startCooldown } = useCooldown()

  const {
    mutateAsync: sendAuthCodeToEmail,
    isError: isRequestError,
    isPending: isRequestPending,
  } = useSendAuthCodeToEmail()
  const {
    mutateAsync: confirmAuthCodeAndLogin,
    isError: isVerifyError,
    isPending: isVerifyPending,
    error,
  } = useConfirmAuthCodeAndLogin()
  const isError = isRequestError || isVerifyError
  const isPending = isRequestPending || isVerifyPending

  const { getValues: getEmailValues } = form
  const {
    control,
    formState: { isValid },
    getValues: getCodeValues,
    resetField,
  } = useForm<z.infer<typeof codeSchema>>({
    resolver: zodResolver(codeSchema),
    mode: 'all',
    defaultValues: { code: '' },
  })

  const sendCode = async () => {
    if (timeLeft > 0) return

    const email = getEmailValues('email')
    await sendAuthCodeToEmail({ email })
    startCooldown(180 * 1000)
  }

  const loginByCode = async () => {
    if (isPending || !isValid) return

    const { code } = getCodeValues()

    try {
      await confirmAuthCodeAndLogin({ code })

      if (successCallback) {
        successCallback()
      } else {
        closeModal()
      }
    } catch {
      resetField('code')
    }
  }

  useKeyboardShortcut({
    keys: ['enter'],
    callback: () => loginByCode(),
  })

  return {
    setNewTab,
    sendCode,
    control,
    loginByCode,
    isError,
    isPending,
    timeLeft,
    isValid,
    error,
  }
}

export { useCheckCodeTab }
