import { IAnimeEpisodeModel } from '@entities/anime/types/IAnimeEpisodeModel'
import { IUserEpisodeProgressModel } from '@entities/anime/types/IUserEpisodeProgressModel'

interface IEditEpisodeButtonProps {
  episodeProgressData: Pick<
    IUserEpisodeProgressModel,
    'isWatched' | 'firstWatchedAt' | 'lastWatchedDuration' | 'reWatchedCount'
  > &
    Pick<IAnimeEpisodeModel, '_id' | 'duration'>

  buttonClassName?: string
  progressBarClassName?: string
  variant?: 'big' | 'small'
}

export type { IEditEpisodeButtonProps }
