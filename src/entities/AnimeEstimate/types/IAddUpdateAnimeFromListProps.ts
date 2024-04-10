import { EListStatus } from "../enums/EListStatus"

interface IAddUpdateAnimeFromListProps {
  accessToken: string
  animeId: string
  animeStatus?: keyof typeof EListStatus
}

export type { IAddUpdateAnimeFromListProps }
