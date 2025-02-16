import { TListStatus } from '@entities/animeEstimate/types'
import {
  CassetteTapeIcon,
  CheckIcon,
  EyeIcon,
  PlayIcon,
  TrashIcon,
} from '@shared/icons'

const getListStatusIcon = (value: TListStatus | null) => {
  if (value === null) return <CassetteTapeIcon />

  return {
    added: <EyeIcon />,
    watching: <PlayIcon />,
    completed: <CheckIcon />,
    dropped: <TrashIcon />,
  }[value]
}

export { getListStatusIcon }
