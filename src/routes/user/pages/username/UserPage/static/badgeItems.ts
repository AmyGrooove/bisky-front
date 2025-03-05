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
    estimateText: 'В списке',
    status: 'added' as TListStatus,
  },
  {
    Icon: CirclePlayIcon,
    estimateCount: watching,
    estimateText: 'Смотрит',
    status: 'watching' as TListStatus,
  },
  {
    Icon: CheckIcon,
    estimateCount: completed,
    estimateText: 'Просмотрел',
    status: 'completed' as TListStatus,
  },
  {
    Icon: TrashIcon,
    estimateCount: dropped,
    estimateText: 'Бросил',
    status: 'dropped' as TListStatus,
  },
]

export { badgeItems }
