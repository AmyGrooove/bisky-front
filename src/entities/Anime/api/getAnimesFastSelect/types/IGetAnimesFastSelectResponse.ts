import { IAnime } from '@entities/anime'

interface IGetAnimesFastSelectResponse extends Pick<IAnime, 'poster' | '_id'> {
  label: string
}

export type { IGetAnimesFastSelectResponse }
