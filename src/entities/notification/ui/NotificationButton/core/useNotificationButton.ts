import { INotificationButtonProps } from '../types/INotificationButtonProps'

const useNotificationButton = (props: INotificationButtonProps) => {
  const { isHasNotifications = false } = props

  return { isHasNotifications }
}

export { useNotificationButton }
