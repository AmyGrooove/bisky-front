import { EListStatus } from "@entities/AnimeEstimate"

interface IAddUpdateAnimeFromListProps {
  animeId: string
  animeStatus: keyof typeof EListStatus
}

export type { IAddUpdateAnimeFromListProps }
