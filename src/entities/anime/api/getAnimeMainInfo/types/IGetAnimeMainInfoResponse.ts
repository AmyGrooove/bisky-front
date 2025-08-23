import { IAnimeModel } from '@entities/anime/types/IAnimeModel'

interface IGetAnimeMainInfoResponse
  extends Pick<
    IAnimeModel,
    | 'name'
    | 'poster'
    | 'status'
    | 'rating'
    | 'kind'
    | 'airedAt'
    | 'nextEpisodeAiredAt'
    | 'episodeAiredCount'
  > {}

export type { IGetAnimeMainInfoResponse }
