import { LifeBuoyIcon, SettingsIcon, UserIcon } from '@shared/icons'

const profileMenuLinks = (username: string | null) => [
  { name: 'Профиль', href: `/user/${username}`, Icon: UserIcon },
  { name: 'Настройки', href: '/settings', Icon: SettingsIcon },
  { name: 'Поддержка', href: '/support', Icon: LifeBuoyIcon },
]

export { profileMenuLinks }
