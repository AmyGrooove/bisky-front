import { TRating } from '@entities/anime/types'

const getNormalRating = (value: TRating) =>
  ({
    g: '+0',
    pg: '+6',
    pg_13: '+12',
    r: '+16',
    r_plus: '+18',
  })[value]

export { getNormalRating }
