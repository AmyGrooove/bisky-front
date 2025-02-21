import { TKind } from '@entities/anime/types'

const getNormalKind = (value: TKind) =>
  ({
    tv: 'Сериал',
    movie: 'Фильм',
    ova: 'OVA',
    ona: 'ONA',
    special: 'Спецвыпуск',
  })[value]

export { getNormalKind }
