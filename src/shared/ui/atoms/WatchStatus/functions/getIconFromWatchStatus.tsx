import { CheckIcon, PlayIcon, StarIcon, TrashIcon } from "@shared/icons"
import { EWatchStatuses } from "@shared/types/enums/EWatchStatuses"

const getIconFromWatchStatus = (
  status: keyof typeof EWatchStatuses | "setWatch",
) =>
  ({
    [EWatchStatuses.complete]: <CheckIcon />,
    [EWatchStatuses.setWatch]: <StarIcon variant="unFilled" />,
    [EWatchStatuses.added]: <StarIcon variant="filled" />,
    [EWatchStatuses.watching]: <PlayIcon />,
    [EWatchStatuses.dropped]: <TrashIcon />,
  })[status]

export { getIconFromWatchStatus }
