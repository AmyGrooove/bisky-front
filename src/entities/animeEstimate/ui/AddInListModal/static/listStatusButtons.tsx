import { TListStatus } from '@entities/animeEstimate/types'
import {
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  PlayIcon,
  TrashIcon,
} from '@shared/icons'

const listStatusButtons = (exclude: TListStatus | null) =>
  [
    {
      icon: <EyeOffIcon />,
      text: 'Удалить',
      status: null as TListStatus | null,
    },
    {
      icon: <EyeIcon />,
      text: 'В список',
      status: 'added' as TListStatus | null,
    },
    {
      icon: <PlayIcon />,
      text: 'Смотрю',
      status: 'watching' as TListStatus | null,
    },
    {
      icon: <CheckIcon />,
      text: 'Уже смотрел',
      status: 'completed' as TListStatus | null,
    },
    {
      icon: <TrashIcon />,
      text: 'Бросил',
      status: 'dropped' as TListStatus | null,
    },
  ].filter((item) => item.status !== exclude)

export { listStatusButtons }
