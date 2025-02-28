import { TListStatus } from '@entities/animeEstimate/types'
import {
  CassetteTapeIcon,
  CheckIcon,
  CirclePlayIcon,
  CrossIcon,
  EyeIcon,
  TrashIcon,
} from '@shared/icons'

const getListStatusIcon = (value: TListStatus | 'skipped' | null) => {
  if (value === null) return CassetteTapeIcon

  return {
    added: EyeIcon,
    watching: CirclePlayIcon,
    completed: CheckIcon,
    dropped: TrashIcon,
    skipped: CrossIcon,
  }[value]
}

export { getListStatusIcon }
