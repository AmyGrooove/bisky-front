import { PlayIcon, SettingsIcon, UserIcon } from '@shared/icons'

const profileMenuLinks = (username: string | null) => [
  { name: 'Профиль', href: `/user/${username}`, icon: <UserIcon /> },
  { name: 'Список аниме', href: `/user/${username}/list`, icon: <PlayIcon /> },
  { name: 'Настройки', href: `/settings`, icon: <SettingsIcon /> },
]

export { profileMenuLinks }
