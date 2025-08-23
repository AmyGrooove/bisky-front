import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

interface IHomeNewEpisodeAnime
  extends Pick<
      IAnimeModel,
      | '_id'
      | 'slug'
      | 'name'
      | 'poster'
      | 'episodeAiredCount'
      | 'episodeCount'
      | 'status'
    >,
    Pick<IUserAnimeReactionModel, 'score'> {}

interface IHomeBestAnime
  extends Pick<IAnimeModel, '_id' | 'slug' | 'name' | 'poster' | 'status'>,
    Pick<IUserAnimeReactionModel, 'score'> {}

interface IHomeSeasonalAnime
  extends Pick<IAnimeModel, '_id' | 'slug' | 'name' | 'poster' | 'screenshots'>,
    Pick<IUserAnimeReactionModel, 'score'> {
  genres: string[]
}

interface IGetInitialHomeDataResponse {
  seasonalAnimes: IHomeSeasonalAnime[]
  newEpisodeAnimes: IHomeNewEpisodeAnime[]
  bestAnimes: IHomeBestAnime[]
}

export type { IGetInitialHomeDataResponse }
