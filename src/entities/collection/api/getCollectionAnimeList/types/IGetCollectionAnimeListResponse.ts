import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'
import { IPaginationMeta } from '@shared/types'

interface CollectionAnimeResponse
  extends Pick<IAnimeModel, '_id' | 'name' | 'poster' | 'slug' | 'status'>,
    Pick<IUserAnimeReactionModel, 'score'> {}

interface IGetCollectionAnimeListResponse extends IPaginationMeta {
  results: CollectionAnimeResponse[]
  allAnimeIDs: string
}

export type { IGetCollectionAnimeListResponse }
