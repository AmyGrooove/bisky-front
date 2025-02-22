import { IAnime } from '@entities/anime/types'

interface IGetAnimeSitemapResponse
  extends Pick<IAnime, 'poster' | '_id' | 'updatedOn' | 'shikiID'> {}

export type { IGetAnimeSitemapResponse }
