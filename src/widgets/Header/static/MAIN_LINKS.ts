import { BoxesIcon, ShieldIcon, WrenchIcon } from '@shared/icons'

const MAIN_LINKS = [
  { name: 'Коллекции', href: `/collections`, Icon: BoxesIcon },
  { name: 'Инструменты', Icon: WrenchIcon },
  { name: 'AnimePass', href: '/animePass', Icon: ShieldIcon },
] as const

export { MAIN_LINKS }
