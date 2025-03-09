import { PlayIcon, SettingsIcon, UserIcon } from '@shared/icons'
import { setModal } from '@widgets/ModalWrapper'
import { SettingsModal } from '@widgets/SettingsModal'

const profileMenuLinks = (username: string | null) => [
  { name: 'Профиль', href: `/user/${username}`, Icon: UserIcon },
  { name: 'Список аниме', href: `/user/${username}/list`, Icon: PlayIcon },
  {
    name: 'Настройки',
    onClick: () => setModal(<SettingsModal />),
    Icon: SettingsIcon,
  },
]

export { profileMenuLinks }
