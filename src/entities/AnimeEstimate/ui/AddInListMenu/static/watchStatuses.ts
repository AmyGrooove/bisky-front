import { EListStatus } from "@entities/AnimeEstimate"

const watchStatuses = [
  EListStatus.cancel,
  EListStatus.added,
  EListStatus.watching,
  EListStatus.dropped,
  EListStatus.completed,
]

export { watchStatuses }
