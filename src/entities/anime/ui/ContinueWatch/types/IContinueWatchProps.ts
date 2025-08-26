import { IAnimeEpisodeModel } from '@entities/anime/types/IAnimeEpisodeModel'
import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserEpisodeProgressModel } from '@entities/anime/types/IUserEpisodeProgressModel'

interface IContinueWatchProps {
  episodeProgressData: Pick<
    IUserEpisodeProgressModel,
    'isWatched' | 'lastWatchedDuration' | 'firstWatchedAt' | 'reWatchedCount'
  > &
    Pick<IAnimeModel, 'slug' | 'kind'> &
    Pick<
      IAnimeEpisodeModel,
      'duration' | 'previewImage' | 'name' | 'animeID' | 'order' | '_id'
    >

  variant?: 'big' | 'small'
  className?: string
}

export type { IContinueWatchProps }
