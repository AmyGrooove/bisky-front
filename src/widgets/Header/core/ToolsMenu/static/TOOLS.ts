import { CrownIcon, DonutIcon, StarIcon } from '@shared/icons'

const TOOLS = [
  {
    Icon: DonutIcon,
    label: 'АниПик',
    description: 'Находи новое мгновенно',
    href: '/aniPick',
  },
  {
    Icon: CrownIcon,
    label: 'АниБаттл',
    description: 'Реши, что заслуживает просмотра сейчас',
    href: '/aniBattle',
  },
  {
    Icon: StarIcon,
    label: 'АниСудья',
    description: 'Вспомни и оцени, что ты уже смотрел',
    href: '/aniJudge',
  },
] as const

export { TOOLS }
