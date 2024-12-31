import { CheckIcon, PlayIcon, StarIcon, TrashIcon } from "@shared/icons"

import { IStatusButton } from "../types/IStatusButton"

const statusButton: IStatusButton[] = [
  { icon: <StarIcon variant="filled" />, status: "added" },
  { icon: <PlayIcon />, status: "watching" },
  { icon: <CheckIcon />, status: "completed" },
  { icon: <TrashIcon />, status: "dropped" },
]

export { statusButton }
