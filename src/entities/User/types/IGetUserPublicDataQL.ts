import { EListStatus } from "@entities/AnimeEstimate"

interface IGetUserPublicDataQL {
  accessToken?: string
  _id?: string | null
  username?: string | null
  animeListStatus?: keyof typeof EListStatus | null
  certainAnimeId?: string | null
}

export type { IGetUserPublicDataQL }
