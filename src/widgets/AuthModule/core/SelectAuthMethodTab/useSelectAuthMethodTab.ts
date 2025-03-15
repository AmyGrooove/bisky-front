import { useFormContext } from 'react-hook-form'
import { IAuthTabProps } from '../../types/IAuthTabProps'
import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { loginSchema } from '../../schemas/loginSchema'
import { z } from 'zod'

const useSelectAuthMethodTab = (props: IAuthTabProps) => {
  const { setNewTab } = props

  const { control, watch } = useFormContext<z.infer<typeof loginSchema>>()

  const username = watch('username')

  const goToPasswordAuth = () => {
    if (username.length < 3) return

    setNewTab(1)
  }

  useKeyboardShortcut({
    keys: ['enter'],
    callback: () => goToPasswordAuth(),
  })

  return { control, username, goToPasswordAuth }
}

export { useSelectAuthMethodTab }
