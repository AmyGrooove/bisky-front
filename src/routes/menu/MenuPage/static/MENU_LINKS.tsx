import {
  CrownIcon,
  DonutIcon,
  LifeBuoyIcon,
  SettingsIcon,
  ShieldIcon,
  StarIcon,
} from '@shared/icons'

const MENU_LINKS = [
  [
    {
      Icon: <ShieldIcon />,
      variant: 'big',
      name: 'AnimePass',
      href: '/animePass',
    },
  ],
  [
    {
      Icon: <SettingsIcon />,
      variant: 'big',
      name: 'Настройки',
      href: '/settings',
    },
    {
      Icon: <LifeBuoyIcon />,
      variant: 'big',
      name: 'Поддержка',
      href: '/support',
    },
  ],
  [
    { Icon: <DonutIcon />, variant: 'small', name: 'АниПик', href: '/aniPick' },
    {
      Icon: <CrownIcon />,
      variant: 'small',
      name: 'АниБаттл',
      href: '/aniBattle',
    },
    {
      Icon: <StarIcon />,
      variant: 'small',
      name: 'АниСудья',
      href: '/aniJudge',
    },
  ],
] as const

export { MENU_LINKS }
