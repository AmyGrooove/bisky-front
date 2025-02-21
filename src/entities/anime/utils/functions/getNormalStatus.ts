import { TStatus } from '@entities/anime/types'

const getNormalStatus = (value: TStatus) =>
  ({
    anons: 'анонс',
    ongoing: 'выходит',
    released: 'вышло',
  })[value]

export { getNormalStatus }
