import { BoxesIcon, HomeIcon } from '@shared/icons'

const MENU_LINKS = [
  { text: 'Главная', href: '/', Icon: HomeIcon },
  { text: 'Коллекции', href: '/collections', Icon: BoxesIcon },
] as const

export { MENU_LINKS }
