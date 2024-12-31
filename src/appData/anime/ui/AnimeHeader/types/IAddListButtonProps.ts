import { TStatus } from "@entities/Anime"
import { TListStatus } from "@entities/AnimeEstimate"

interface IAddListButtonProps {
  userAnimeStatus: TListStatus | null
  _id: string | null
  updateUserData: () => Promise<void>
  animeStatus: TStatus
}

export type { IAddListButtonProps }
