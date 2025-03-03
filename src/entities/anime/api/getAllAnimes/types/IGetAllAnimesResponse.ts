import { IAnime } from '@entities/anime/types'

interface IGetAllAnimesResponse
  extends Pick<IAnime, '_id' | 'updatedOn' | 'poster' | 'status' | 'shikiID'> {
  label: string
}

export type { IGetAllAnimesResponse }
