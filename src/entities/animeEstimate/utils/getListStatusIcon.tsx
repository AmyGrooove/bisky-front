import { TListStatus } from '@entities/animeEstimate/types'
import {
  CassetteTapeIcon,
  CheckIcon,
  CirclePlayIcon,
  EyeIcon,
  TrashIcon,
} from '@shared/icons'

const getListStatusIcon = (value: TListStatus | null) => {
  if (value === null) return <CassetteTapeIcon />

  return {
    added: <EyeIcon />,
    watching: <CirclePlayIcon />,
    completed: <CheckIcon />,
    dropped: <TrashIcon />,
  }[value]
}

export { getListStatusIcon }
