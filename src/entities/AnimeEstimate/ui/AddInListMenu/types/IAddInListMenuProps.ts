import { EStatus } from "@entities/Anime"
import { EListStatus } from "@entities/AnimeEstimate"

interface IAddInListMenuProps {
  _id: string | null

  currentUserStatus?: keyof typeof EListStatus | null
  animeStatus?: keyof typeof EStatus
  onChange?: (currentUserStatus?: keyof typeof EListStatus) => void
}

export type { IAddInListMenuProps }
