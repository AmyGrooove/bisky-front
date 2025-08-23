import { IAnimeModel } from '@entities/anime/types/IAnimeModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'
import { IPaginationMeta } from '@shared/types'

interface ClubAnimeResponse
  extends Pick<IAnimeModel, '_id' | 'name' | 'poster' | 'slug' | 'status'>,
    Pick<IUserAnimeReactionModel, 'score'> {}

interface IGetClubAnimeListResponse extends IPaginationMeta {
  results: ClubAnimeResponse[]
  allAnimeIDs: string
}

export type { IGetClubAnimeListResponse }
