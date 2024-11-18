import { EListStatus } from "@entities/AnimeEstimate"

interface ICardUserStatusProps {
  _id?: string | undefined
  userStatus?: keyof typeof EListStatus | null
  className?: string
}

export type { ICardUserStatusProps }
