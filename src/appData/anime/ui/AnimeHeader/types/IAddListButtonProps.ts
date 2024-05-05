import { EListStatus } from "@entities/AnimeEstimate"

interface IAddListButtonProps {
  animeStatus: keyof typeof EListStatus | null
  _id: string | null
  updateUserData: () => Promise<void>
}

export type { IAddListButtonProps }
