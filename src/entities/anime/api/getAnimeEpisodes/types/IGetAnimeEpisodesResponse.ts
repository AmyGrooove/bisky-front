import { IAnimeEpisodeModel } from '@entities/anime/types/IAnimeEpisodeModel'

interface IGetAnimeEpisodesResponse
  extends Pick<
    IAnimeEpisodeModel,
    | '_id'
    | 'order'
    | 'name'
    | 'arch'
    | 'airedAt'
    | 'isFiller'
    | 'duration'
    | 'previewImage'
  > {}

export type { IGetAnimeEpisodesResponse }
