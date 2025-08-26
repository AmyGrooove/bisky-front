import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

interface IUpdateEstimateButtonProps {
  currentUserAnimeStatus: IUserAnimeReactionModel['status'] | null
  animeID: string

  isEllipsisIcon?: boolean
  className?: string
}

export type { IUpdateEstimateButtonProps }
