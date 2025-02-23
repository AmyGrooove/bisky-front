import { IAnime } from '@entities/anime/types'

interface IGetAnimeSitemapResponse extends Pick<IAnime, '_id' | 'updatedOn'> {}

export type { IGetAnimeSitemapResponse }
