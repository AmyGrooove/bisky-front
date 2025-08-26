import { IAnimeModel } from '../types/IAnimeModel'

const kindText: Record<IAnimeModel['kind'], string> = {
  tv: 'Сериал',
  movie: 'Фильм',
  ova: 'OVA',
  ona: 'ONA',
  special: 'Спецвыпуск',
}

const getNormalKind = (value: IAnimeModel['kind']) => kindText[value]

export { getNormalKind }
