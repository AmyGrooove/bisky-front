import { useFormContext } from 'react-hook-form'
import { IAuthTabProps } from '../../types/IAuthTabProps'
import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'

const useSelectAuthMethodTab = (props: IAuthTabProps) => {
  const { setNewTab } = props

  const { control, watch } = useFormContext()

  const username = watch('username')

  const goToPasswordAuth = () => {
    if (username < 3) return

    setNewTab(1)
  }

  useKeyboardShortcut({
    keys: ['enter'],
    callback: () => goToPasswordAuth(),
  })

  return { control, username, goToPasswordAuth }
}

export { useSelectAuthMethodTab }
