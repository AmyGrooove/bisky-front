import { IUserModel } from '@entities/account/types/IUserModel'
import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'
import { IDubClubModel } from '@entities/club/types/IDubClubModel'
import { ICollectionModel } from '@entities/collection/types/ICollectionModel'
import { IUserCollectionReactionModel } from '@entities/collection/types/IUserCollectionReactionModel'

interface IAnimeMiniCollection
  extends Pick<IDubClubModel, '_id' | 'slug' | 'name'> {}

interface IAnimeAdditionalCollectionAuthor
  extends Pick<IUserModel, '_id' | 'nickname' | 'slug' | 'avatar'> {}

interface IAnimeAdditionalCollection
  extends Pick<ICollectionModel, '_id' | 'slug' | 'name'>,
    Pick<IUserCollectionReactionModel, 'score'> {
  author: IAnimeAdditionalCollectionAuthor | null
  itemsCount: number
}

interface IListCounts {
  added: number
  watching: number
  completed: number
  dropped: number
}

interface IRelatedAnime
  extends Pick<IAnimeModel, '_id' | 'name' | 'poster' | 'slug'>,
    Pick<IUserAnimeReactionModel, 'score'> {}

interface IGetAnimeAdditionalInfoResponse
  extends Pick<
      IAnimeModel,
      | 'description'
      | 'screenshots'
      | 'tags'
      | 'airedAt'
      | 'releasedAt'
      | 'otherNames'
      | 'updateIDs'
      | 'views'
      | 'blockedUrl'
    >,
    Pick<IUserAnimeReactionModel, 'score'> {
  genres: IAnimeMiniCollection[]
  studios: IAnimeMiniCollection[]
  franchise: IAnimeMiniCollection | null
  collections: IAnimeAdditionalCollection[]
  scoreCount: number
  listCounts: IListCounts
  favoriteCount: number
  related: IRelatedAnime[]
}

export type { IGetAnimeAdditionalInfoResponse }
