import { toast as sonnerToast } from 'sonner'

import { IToastProps } from '../types/IToastProps'

const useToast = (props: IToastProps) => {
  const { message, Icon, action, duration, styles } = props

  const handleAction = (id: string | number) => {
    sonnerToast.dismiss(id)
    action?.callback()
  }

  return { message, Icon, duration, styles, handleAction, action }
}

export { useToast }
