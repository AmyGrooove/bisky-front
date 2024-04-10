import { EListStatus } from "@entities/AnimeEstimate"
import {
  CheckIcon,
  CrossIcon,
  PlayIcon,
  StarIcon,
  TrashIcon,
} from "@shared/icons"

const getIconFromWatchStatus = (status: keyof typeof EListStatus) =>
  ({
    [EListStatus.completed]: <CheckIcon />,
    [EListStatus.setWatch]: <StarIcon variant="unFilled" />,
    [EListStatus.added]: <StarIcon variant="filled" />,
    [EListStatus.watching]: <PlayIcon />,
    [EListStatus.dropped]: <TrashIcon />,
    [EListStatus.cancel]: <CrossIcon />,
  })[status]

export { getIconFromWatchStatus }
