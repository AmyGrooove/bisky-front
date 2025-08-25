import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'
import { IDubClubModel } from '@entities/dubClub/types/IDubClubModel'

interface IAnimeMiniCollection
  extends Pick<IDubClubModel, '_id' | 'slug' | 'name'> {}

interface IGetAnimeMiniInfoResponse
  extends Pick<
      IAnimeModel,
      | '_id'
      | 'name'
      | 'poster'
      | 'slug'
      | 'status'
      | 'rating'
      | 'kind'
      | 'airedAt'
      | 'nextEpisodeAiredAt'
      | 'episodeAiredCount'
      | 'description'
      | 'screenshots'
    >,
    Pick<IUserAnimeReactionModel, 'score'> {
  genres: IAnimeMiniCollection[]
  studios: IAnimeMiniCollection[]
}

export type { IGetAnimeMiniInfoResponse }
