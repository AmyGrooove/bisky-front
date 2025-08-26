import { IAnimeModel } from '../types/IAnimeModel'

const statusText: Record<IAnimeModel['status'], string> = {
  anons: 'Анонс',
  ongoing: 'Выходит',
  released: 'Вышло',
}

const getNormalStatus = (value: IAnimeModel['status']) => statusText[value]

export { getNormalStatus }
