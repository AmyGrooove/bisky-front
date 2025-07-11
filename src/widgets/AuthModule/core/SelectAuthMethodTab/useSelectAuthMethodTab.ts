import { useFormContext } from 'react-hook-form'
import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { z } from 'zod'

import { IAuthTabProps } from '../../types/IAuthTabProps'
import { loginSchema } from '../../schemas/loginSchema'

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
