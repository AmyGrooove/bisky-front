import { ComponentIcon, HomeIcon, SearchIcon, UserIcon } from '@shared/icons'

const barLinks = (username: string) => [
  { Icon: HomeIcon, href: '/', isAuthRequired: false },
  { Icon: SearchIcon, href: '/search', isAuthRequired: false },
  { Icon: UserIcon, href: `/user/${username}`, isAuthRequired: true },
  { Icon: ComponentIcon, href: '/tools', isAuthRequired: false },
]

export { barLinks }
