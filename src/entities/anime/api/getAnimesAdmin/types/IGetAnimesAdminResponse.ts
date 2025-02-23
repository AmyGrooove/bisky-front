import { IAnime } from '@entities/anime/types'

interface IGetAnimesAdminResponse
  extends Pick<IAnime, '_id' | 'updatedOn' | 'poster' | 'status' | 'shikiID'> {
  label: string
}

export type { IGetAnimesAdminResponse }
