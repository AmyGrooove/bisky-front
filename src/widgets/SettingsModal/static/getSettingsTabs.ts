import {
  BlocksIcon,
  HourglassIcon,
  InfoIcon,
  LockIcon,
  MailIcon,
  TriangleAlertIcon,
  UserIcon,
} from '@shared/icons'

const getSettingsTabs = ({
  warningClassName,
  isTemporary = true,
  isMobile = false,
}: {
  warningClassName: string
  isTemporary: boolean
  isMobile: boolean
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
  {
    Icon: InfoIcon,
    children: 'Поддержка',
    isDisabled: !isMobile,
  },
]

export { getSettingsTabs }
