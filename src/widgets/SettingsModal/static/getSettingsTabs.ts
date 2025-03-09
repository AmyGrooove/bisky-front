import {
  BlocksIcon,
  HourglassIcon,
  LockIcon,
  MailIcon,
  UserIcon,
} from '@shared/icons'

const getSettingsTabs = ({
  temporaryClassName,
}: {
  temporaryClassName: string
}) => [
  { Icon: HourglassIcon, children: 'Временный', className: temporaryClassName },
  { Icon: UserIcon, children: 'Профиль' },
  { Icon: MailIcon, children: 'Почта' },
  { Icon: LockIcon, children: 'Пароль' },
  { Icon: BlocksIcon, children: 'Интеграция' },
]

export { getSettingsTabs }
