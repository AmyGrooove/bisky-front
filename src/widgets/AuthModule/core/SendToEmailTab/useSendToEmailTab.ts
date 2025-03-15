import { IEmailTabProps } from '../../types/IEmailTabProps'
import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { useRequestReset } from '@entities/auth/api/requestReset'
import { useCooldown } from '../../utils/useCooldown'

const useSendToEmailTab = (props: IEmailTabProps) => {
  const { setNewTab, form } = props

  const { timeLeft, startCooldown } = useCooldown()

  const {
    mutateAsync: requestReset,
    isPending,
    isError,
    error,
  } = useRequestReset()

  const {
    control,
    formState: { isValid },
    getValues,
  } = form

  const sendReset = async () => {
    if (isPending || !isValid) return

    const email = getValues('email')

    if (timeLeft <= 0) {
      console.log(1)
      await requestReset({ email })

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
