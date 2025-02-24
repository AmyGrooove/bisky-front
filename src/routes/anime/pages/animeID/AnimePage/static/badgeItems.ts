import { TListStatus } from '@entities/animeEstimate/types'
import { CheckIcon, CirclePlayIcon, EyeIcon, TrashIcon } from '@shared/icons'

const badgeItems = (
  added: number,
  watching: number,
  completed: number,
  dropped: number,
) => [
  {
    Icon: EyeIcon,
    estimateCount: added,
    estimateText: 'В списках',
    status: 'added' as TListStatus,
  },
  {
    Icon: CirclePlayIcon,
    estimateCount: watching,
    estimateText: 'Смотрят',
    status: 'watching' as TListStatus,
  },
  {
    Icon: CheckIcon,
    estimateCount: completed,
    estimateText: 'Просмотрели',
    status: 'completed' as TListStatus,
  },
  {
    Icon: TrashIcon,
    estimateCount: dropped,
    estimateText: 'Бросили',
    status: 'dropped' as TListStatus,
  },
]

export { badgeItems }
