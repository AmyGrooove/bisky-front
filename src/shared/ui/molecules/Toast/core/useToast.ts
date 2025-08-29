import { toast as sonnerToast } from 'sonner'
import { useCallback } from 'react'

import { IToastProps } from '../types/IToastProps'

const useToast = (props: IToastProps) => {
  const { message, Icon, action, duration, styles } = props

  const handleAction = useCallback(
    (id: string | number) => {
      sonnerToast.dismiss(id)
      action?.callback()
    },
    [action],
  )

  return { message, Icon, duration, styles, handleAction, action }
}

export { useToast }
