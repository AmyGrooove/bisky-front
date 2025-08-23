import { IAnimeModel } from '@entities/anime/types/IAnimeModel'

interface IGetAnimeMetaResponse
  extends Pick<
    IAnimeModel,
    '_id' | 'slug' | 'description' | 'name' | 'poster'
  > {}

export type { IGetAnimeMetaResponse }
