import { ComponentIcon, HomeIcon, SearchIcon, UserIcon } from '@shared/icons'

const barLinks = (username: string) => [
  { Icon: HomeIcon, href: '/' },
  { Icon: SearchIcon, href: '/search' },
  { Icon: UserIcon, href: `/user/${username}` },
  { Icon: ComponentIcon, href: '/tools' },
]

export { barLinks }
