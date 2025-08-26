import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

interface IAnimeData
  extends Pick<IAnimeModel, 'slug' | 'name' | 'poster' | '_id'>,
    Partial<Pick<IAnimeModel, 'episodeCount' | 'status' | 'episodeAiredCount'>>,
    Pick<IUserAnimeReactionModel, 'score'> {}

interface IAnimeCardProps {
  animeData: IAnimeData

  currentUserAnimeStatus?: IUserAnimeReactionModel['status'] | null
  className?: string
  variant?: 'big' | 'small'
  badges?: {
    score?: number | null
    relation?: string
    reWatchedCount?: number
  }
}

export type { IAnimeCardProps }
