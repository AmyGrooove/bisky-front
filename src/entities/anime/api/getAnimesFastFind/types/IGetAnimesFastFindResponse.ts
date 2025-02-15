import { IAnime } from '@entities/anime'

interface IGetAnimesFastFindResponse extends Pick<IAnime, 'poster' | '_id'> {
  label: string
}

export type { IGetAnimesFastFindResponse }
