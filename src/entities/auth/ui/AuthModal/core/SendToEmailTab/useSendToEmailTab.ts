import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { useCooldown } from '@shared/utils/hooks/useCooldown'
import { useSendAuthCodeToEmail } from '@entities/auth/api/sendAuthCodeToEmail'

import { IEmailTabProps } from '../../types/IEmailTabProps'

const useSendToEmailTab = (props: IEmailTabProps) => {
  const { setNewTab, form } = props

  const { timeLeft, startCooldown } = useCooldown()

  const {
    mutateAsync: sendAuthCodeToEmail,
    isPending,
    isError,
    error,
  } = useSendAuthCodeToEmail()

  const {
    control,
    formState: { isValid },
    getValues,
  } = form

  const sendReset = async () => {
    if (isPending || !isValid) return

    const email = getValues('email')

    if (timeLeft <= 0) {
      await sendAuthCodeToEmail({ email })

      startCooldown(180 * 1000)
    }

    setNewTab(3)
  }

  useKeyboardShortcut({
    keys: ['enter'],
    callback: () => sendReset(),
  })

  return { control, isValid, setNewTab, isPending, isError, sendReset, error }
}

export { useSendToEmailTab }
