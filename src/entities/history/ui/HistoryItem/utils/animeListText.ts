import { TListStatus } from '@entities/animeEstimate'

const animeListText = (listStatus: TListStatus | null) =>
  listStatus
    ? {
        added: 'Добавил аниме в список',
        completed: 'Досмотрел аниме',
        dropped: 'Бросил аниме',
        watching: 'Начал смотреть',
      }[listStatus]
    : 'Удалил аниме из списка'

export { animeListText }
