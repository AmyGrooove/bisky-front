import { BoxesIcon, ShieldIcon, WrenchIcon } from '@shared/icons'
import { setModal } from '@widgets/ModalWrapper'
import { ReactNode } from 'react'

const mainLinks = [
  { name: 'Коллекции', href: `/collections`, Icon: BoxesIcon },
  {
    name: 'Инструменты',
    onClick: (children: ReactNode) => setModal(children),
    Icon: WrenchIcon,
  },
  { name: 'AnimePass', href: '/animePass', Icon: ShieldIcon },
]

export { mainLinks }
