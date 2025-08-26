import { IUserEpisodeProgressModel } from '@entities/anime/types/IUserEpisodeProgressModel'

interface IGetUserEpisodesDataResponse
  extends Pick<
    IUserEpisodeProgressModel,
    | 'animeEpisodeID'
    | 'lastWatchedDuration'
    | 'reWatchedCount'
    | 'isWatched'
    | 'firstWatchedAt'
  > {}

export type { IGetUserEpisodesDataResponse }
