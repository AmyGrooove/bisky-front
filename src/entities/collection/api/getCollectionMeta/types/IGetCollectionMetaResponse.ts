import { ICollectionModel } from '@entities/collection/types/ICollectionModel'

interface IGetCollectionMetaResponse
  extends Pick<
    ICollectionModel,
    '_id' | 'slug' | 'name' | 'poster' | 'description'
  > {}

export type { IGetCollectionMetaResponse }
