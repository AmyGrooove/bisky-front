import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

interface IAnimeData
  extends Pick<IAnimeModel, 'slug' | 'name' | 'poster' | '_id'>,
    Partial<Pick<IAnimeModel, 'episodeCount' | 'status' | 'episodeAiredCount'>>,
    Pick<IUserAnimeReactionModel, 'score'> {
  relation?: string
}

interface IAnimeCardProps {
  animeData: IAnimeData

  userData?: {
    animeStatus?: IUserAnimeReactionModel['status'] | null
    reWatchedCount?: number
  }
  className?: string
  variant?: 'big' | 'small'
}

export type { IAnimeCardProps }
