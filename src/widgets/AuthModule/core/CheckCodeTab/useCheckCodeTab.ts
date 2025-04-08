import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRequestReset } from '@entities/auth/api/requestReset'
import { useVerifyReset } from '@entities/auth/api/verifyReset'
import { useRouter } from 'next/navigation'
import { closeModal, closeAdditionalModal } from '@widgets/ModalWrapper'
import { getWhoami } from '@entities/auth/api/getWhoami'

import { codeSchema } from '../../schemas/codeSchema'
import { IEmailTabProps } from '../../types/IEmailTabProps'
import { useCooldown } from '../../utils/useCooldown'

const useCheckCodeTab = (props: IEmailTabProps) => {
  const { setNewTab, form, successCallback } = props

  const { push } = useRouter()

  const { timeLeft, startCooldown } = useCooldown()

  const {
    mutateAsync: requestReset,
    isError: isRequestError,
    isPending: isRequestPending,
  } = useRequestReset()
  const {
    mutateAsync: verifyReset,
    isError: isVerifyError,
    isPending: isVerifyPending,
    error,
  } = useVerifyReset()
  const isError = isRequestError || isVerifyError
  const isPending = isRequestPending || isVerifyPending

  const { getValues: getEmailValues } = form
  const {
    control,
    formState: { isValid },
    getValues: getCodeValues,
  } = useForm<z.infer<typeof codeSchema>>({
    resolver: zodResolver(codeSchema),
    mode: 'all',
    defaultValues: { code: '', newPassword: '' },
  })

  const sendReset = async () => {
    if (timeLeft > 0) return

    const email = getEmailValues('email')

    if (timeLeft > 0) {
      await requestReset({ email })

      startCooldown(180 * 1000)
    }
  }

  const updatePasswordByCode = async () => {
    if (isPending || !isValid) return

    const { code, newPassword } = getCodeValues()

    await verifyReset({ code, newPassword })
    const username = (await getWhoami()).username
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
    callback: () => sendReset(),
  })

  return {
    setNewTab,
    sendReset,
    control,
    updatePasswordByCode,
    isError,
    isPending,
    timeLeft,
    isValid,
    error,
  }
}

export { useCheckCodeTab }
