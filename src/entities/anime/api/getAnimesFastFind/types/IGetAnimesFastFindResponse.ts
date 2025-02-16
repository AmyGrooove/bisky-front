import { IAnime } from '@entities/anime/types'

interface IGetAnimesFastFindResponse extends Pick<IAnime, 'poster' | '_id'> {
  label: string
}

export type { IGetAnimesFastFindResponse }
