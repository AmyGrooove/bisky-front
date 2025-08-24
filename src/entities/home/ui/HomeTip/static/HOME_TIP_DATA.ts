import { CrownIcon, DonutIcon, ShieldIcon, StarIcon } from '@shared/icons'

const HOME_TIP_DATA = {
  AniPick: {
    Icon: DonutIcon,
    href: '/aniPick',
    title: 'АниПик',
    descriptions: [
      'Инструмент для быстрого выбора аниме',
      'Мы показываем тайтл с краткой информацией, а ты решаешь: добавить в список или пропустить',
    ],
    buttonText: 'Попробовать',
    image: '/images/tips/AniPick.png',
  },
  AniBattle: {
    Icon: CrownIcon,
    href: '/aniBattle',
    title: 'АниБаттл',
    descriptions: [
      'Битва тайтлов из твоего списка',
      'Мы показываем два аниме, ты выбираешь одно — второе выбывает, а на его место приходит новый претендент',
    ],
    buttonText: 'Попробовать',
    image: '/images/tips/AniBattle.png',
  },
  AniJudge: {
    Icon: StarIcon,
    href: '/aniJudge',
    title: 'АниСудья',
    descriptions: [
      'Оценивай то, что уже посмотрел',
      'Мы показываем тайтлы из твоего списка просмотренного — ты ставишь оценку',
    ],
    buttonText: 'Попробовать',
    image: '/images/tips/AniJudge.png',
  },
  AnimePass: {
    Icon: ShieldIcon,
    href: '/animePass',
    title: 'AnimePass',
    descriptions: [
      'Система заданий и наград для любителей аниме',
      'Выполняй задания — получай очки и разблокируй эксклюзивные награды',
    ],
    buttonText: 'Посмотреть',
    image: '/images/tips/AnimePass.png',
  },
}

export { HOME_TIP_DATA }
