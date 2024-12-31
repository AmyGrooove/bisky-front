import { TListStatus } from "@entities/AnimeEstimate"

interface ICardUserStatusProps {
  _id?: string | undefined
  userStatus?: TListStatus | null
  className?: string
}

export type { ICardUserStatusProps }
