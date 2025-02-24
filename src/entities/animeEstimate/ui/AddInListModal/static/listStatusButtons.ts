import { TListStatus } from '@entities/animeEstimate/types'
import {
  CheckIcon,
  CirclePlayIcon,
  EyeIcon,
  EyeOffIcon,
  TrashIcon,
} from '@shared/icons'

const listStatusButtons = (exclude: TListStatus | null) =>
  [
    {
      Icon: EyeOffIcon,
      text: 'Удалить',
      status: null as TListStatus | null,
    },
    {
      Icon: EyeIcon,
      text: 'В список',
      status: 'added' as TListStatus | null,
    },
    {
      Icon: CirclePlayIcon,
      text: 'Смотрю',
      status: 'watching' as TListStatus | null,
    },
    {
      Icon: CheckIcon,
      text: 'Уже смотрел',
      status: 'completed' as TListStatus | null,
    },
    {
      Icon: TrashIcon,
      text: 'Бросил',
      status: 'dropped' as TListStatus | null,
    },
  ].filter((item) => item.status !== exclude)

export { listStatusButtons }
