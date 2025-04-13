import { TListStatus } from '@entities/animeEstimate/types'
import { CheckIcon, EyeIcon, PlayIcon, TrashIcon } from '@shared/icons'

const getSuccessStatus = (value: TListStatus) =>
  ({
    added: { text: 'Аниме добавлено в список запланированного', Icon: EyeIcon },
    watching: { text: 'Аниме добавлено в список смотрю', Icon: PlayIcon },
    completed: {
      text: 'Аниме добавлено в список просмотренного',
      Icon: CheckIcon,
    },
    dropped: { text: 'Аниме добавлено в список брошенное', Icon: TrashIcon },
  })[value]

export { getSuccessStatus }
