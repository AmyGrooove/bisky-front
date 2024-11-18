import { EStatus } from "@entities/Anime"
import { EListStatus } from "@entities/AnimeEstimate"

interface IAddListButtonProps {
  userAnimeStatus: keyof typeof EListStatus | null
  _id: string | null
  updateUserData: () => Promise<void>
  animeStatus: keyof typeof EStatus
}

export type { IAddListButtonProps }
