import {
  BlocksIcon,
  HourglassIcon,
  LockIcon,
  MailIcon,
  TriangleAlertIcon,
  UserIcon,
} from '@shared/icons'

const getSettingsTabs = ({
  warningClassName,
  isTemporary = true,
}: {
  warningClassName: string
  isTemporary: boolean
}) => [
  {
    Icon: HourglassIcon,
    children: 'Временный',
    className: warningClassName,
    isDisabled: !isTemporary,
  },
  { Icon: UserIcon, children: 'Профиль' },
  { Icon: MailIcon, children: 'Почта' },
  { Icon: LockIcon, children: 'Пароль' },
  { Icon: BlocksIcon, children: 'Интеграция' },
  {
    Icon: TriangleAlertIcon,
    children: 'Критично',
    className: warningClassName,
    isDisabled: isTemporary,
  },
]

export { getSettingsTabs }
