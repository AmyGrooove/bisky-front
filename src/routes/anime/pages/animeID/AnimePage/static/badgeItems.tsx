import { TListStatus } from '@entities/animeEstimate/types'
import { CheckIcon, CirclePlayIcon, EyeIcon, TrashIcon } from '@shared/icons'

const badgeItems = (
  added: number,
  watching: number,
  completed: number,
  dropped: number,
) => [
  {
    icon: <EyeIcon />,
    estimateCount: added,
    estimateText: 'В списках',
    status: 'added' as TListStatus,
  },
  {
    icon: <CirclePlayIcon />,
    estimateCount: watching,
    estimateText: 'Смотрят',
    status: 'watching' as TListStatus,
  },
  {
    icon: <CheckIcon />,
    estimateCount: completed,
    estimateText: 'Просмотрели',
    status: 'completed' as TListStatus,
  },
  {
    icon: <TrashIcon />,
    estimateCount: dropped,
    estimateText: 'Бросили',
    status: 'dropped' as TListStatus,
  },
]

export { badgeItems }
