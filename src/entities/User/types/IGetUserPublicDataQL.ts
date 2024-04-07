import { EListStatus } from "@entities/Anime"

interface IGetUserPublicDataQL {
  accessToken?: string
  _id?: string | null
  username?: string | null
  animeListStatus?: keyof typeof EListStatus | null
}

export type { IGetUserPublicDataQL }
