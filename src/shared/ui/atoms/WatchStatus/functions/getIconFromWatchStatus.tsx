import { TListStatus } from "@entities/AnimeEstimate"
import {
  CheckIcon,
  CrossIcon,
  PlayIcon,
  StarIcon,
  TrashIcon,
} from "@shared/icons"

const getIconFromWatchStatus = (status: TListStatus) =>
  ({
    completed: <CheckIcon />,
    setWatch: <StarIcon variant="unFilled" />,
    added: <StarIcon variant="filled" />,
    watching: <PlayIcon />,
    dropped: <TrashIcon />,
    cancel: <CrossIcon />,
    skipped: <CrossIcon />,
  })[status]

export { getIconFromWatchStatus }
