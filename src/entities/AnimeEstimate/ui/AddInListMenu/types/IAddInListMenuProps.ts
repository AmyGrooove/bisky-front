import { TStatus } from "@entities/Anime"
import { TListStatus } from "@entities/AnimeEstimate"

interface IAddInListMenuProps {
  _id: string | null

  currentUserStatus?: TListStatus | null
  animeStatus?: TStatus
  onChange?: (currentUserStatus?: TListStatus) => void
}

export type { IAddInListMenuProps }
