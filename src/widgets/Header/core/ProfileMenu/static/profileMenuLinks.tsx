import { ComponentIcon, SettingsIcon, UserIcon } from '@shared/icons'

const profileMenuLinks = (username: string | null) => [
  { name: 'Профиль', href: `/user/${username}`, Icon: <UserIcon /> },
  { name: 'Настройки', href: '/settings', Icon: <SettingsIcon /> },
  { name: 'Меню', href: '/menu', Icon: <ComponentIcon /> },
]

export { profileMenuLinks }
