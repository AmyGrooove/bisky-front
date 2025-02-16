import {
  CassetteTapeIcon,
  HouseIcon,
  SearchIcon,
  UserIcon,
} from '@shared/icons'

const barLinks = (username: string) => [
  { icon: <HouseIcon />, href: '/' },
  { icon: <SearchIcon />, href: '/search' },
  { icon: <UserIcon />, href: `/user/${username}` },
  { icon: <CassetteTapeIcon />, href: `/user/${username}/list` },
]

export { barLinks }
