import { useAuthGate } from '@entities/auth/hooks/useAuthGate'

import { INotificationButtonProps } from '../types/INotificationButtonProps'

const useNotificationButton = (props: INotificationButtonProps) => {
  const { isHasNotifications = false } = props

  const { guardLink } = useAuthGate()

  return { isHasNotifications, guardLink }
}

export { useNotificationButton }
