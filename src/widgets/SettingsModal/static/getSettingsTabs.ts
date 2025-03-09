import {
  BlocksIcon,
  HourglassIcon,
  LockIcon,
  MailIcon,
  UserIcon,
} from '@shared/icons'

const getSettingsTabs = ({
  temporaryClassName,
  isTemporary = true,
}: {
  temporaryClassName: string
  isTemporary: boolean
}) => [
  {
    Icon: HourglassIcon,
    children: 'Временный',
    className: temporaryClassName,
    isDisabled: !isTemporary,
  },
  { Icon: UserIcon, children: 'Профиль' },
  { Icon: MailIcon, children: 'Почта' },
  { Icon: LockIcon, children: 'Пароль' },
  { Icon: BlocksIcon, children: 'Интеграция' },
]

export { getSettingsTabs }
