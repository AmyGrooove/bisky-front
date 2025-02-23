import { IGenre } from '@entities/genre/types'

interface IGetGenreSitemapResponse extends Pick<IGenre, '_id'> {}

export type { IGetGenreSitemapResponse }
