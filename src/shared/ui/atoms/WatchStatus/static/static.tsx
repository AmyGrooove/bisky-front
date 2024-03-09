import { CheckMarkIcon, StarIcon, PlayIcon, DroppedIcon } from "@/shared/icons"

import { Statuses, StatusMap } from "../types/IWatchStatusProps"

const SynchronizedStatusMap: StatusMap = {
  [Statuses.complete]: <CheckMarkIcon width="12px" height="12px" />,
  [Statuses.setWatch]: <StarIcon fillStar={false} width="12px" height="12px" />,
  [Statuses.added]: <StarIcon fillStar={true} width="12px" height="12px" />,
  [Statuses.watching]: <PlayIcon width="12px" height="12px" />,
  [Statuses.dropped]: <DroppedIcon width="12px" height="12px" />,
}

export { SynchronizedStatusMap }
