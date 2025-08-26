import { IAnimeModel } from '../types/IAnimeModel'

const ratingText: Record<IAnimeModel['rating'], string> = {
  g: '+0',
  pg: '+6',
  pg13: '+12',
  r: '+16',
  rPlus: '+18',
}

const getNormalRating = (value: IAnimeModel['rating']) => ratingText[value]

export { getNormalRating }
