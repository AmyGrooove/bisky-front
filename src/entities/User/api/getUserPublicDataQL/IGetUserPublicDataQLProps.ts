import { EListStatus } from "@entities/AnimeEstimate"

interface IGetUserPublicDataQLProps {
  _id?: string | null
  username?: string | null
  animeListStatus?: keyof typeof EListStatus | null
  certainAnimeId?: string | null
}

export type { IGetUserPublicDataQLProps }
