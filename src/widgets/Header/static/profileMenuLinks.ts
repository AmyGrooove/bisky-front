import { PlayIcon, SettingsIcon, UserIcon } from '@shared/icons'

const profileMenuLinks = (username: string | null) => [
  { name: 'Профиль', href: `/user/${username}`, Icon: UserIcon },
  { name: 'Список аниме', href: `/user/${username}/list`, Icon: PlayIcon },
  { name: 'Настройки', href: `/settings`, Icon: SettingsIcon },
]

export { profileMenuLinks }
