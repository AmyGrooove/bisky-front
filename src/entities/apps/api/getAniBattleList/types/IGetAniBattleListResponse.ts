import { IAnimeModel } from '@entities/anime/types/IAnimeModel'

interface IAniBattleAnimeResponse
  extends Pick<IAnimeModel, '_id' | 'name' | 'poster' | 'slug'> {}

interface IGetAniBattleListResponse {
  added: IAniBattleAnimeResponse[]
  watching: IAniBattleAnimeResponse[]
  completed: IAniBattleAnimeResponse[]
  dropped: IAniBattleAnimeResponse[]
}

export type { IGetAniBattleListResponse }
