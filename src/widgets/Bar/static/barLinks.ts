import {
  CassetteTapeIcon,
  HouseIcon,
  SearchIcon,
  UserIcon,
} from '@shared/icons'

const barLinks = (username: string) => [
  { Icon: HouseIcon, href: '/' },
  { Icon: SearchIcon, href: '/search' },
  { Icon: UserIcon, href: `/user/${username}` },
  { Icon: CassetteTapeIcon, href: `/user/${username}/list` },
]

export { barLinks }
