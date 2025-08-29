import { memo } from 'react'
import { cn } from '@shared/utils/functions'
import { BellIcon, BellRingIcon } from '@shared/icons'
import Link from 'next/link'

import { INotificationButtonProps } from '../types/INotificationButtonProps'

import { useNotificationButton } from './useNotificationButton'
import st from './NotificationButton.module.scss'

const NotificationButton = memo((props: INotificationButtonProps) => {
  const { isHasNotifications } = useNotificationButton(props)

  return (
    <Link
      href="/notifications"
      className={cn(st.root, {
        [st.root_hasNotifications]: isHasNotifications,
      })}
    >
      {isHasNotifications ? (
        <BellRingIcon className={st.icon} />
      ) : (
        <BellIcon className={st.icon} />
      )}
    </Link>
  )
})

NotificationButton.displayName = 'NotificationButton'

export { NotificationButton }
