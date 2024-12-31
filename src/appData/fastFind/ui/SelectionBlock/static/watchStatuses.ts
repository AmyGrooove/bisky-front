import { TWatchStatuses } from "@entities/AnimeEstimate"

const watchStatuses: Exclude<TWatchStatuses, "cancel" | "added">[] = [
  "dropped",
  "watching",
  "completed",
]

export { watchStatuses }
