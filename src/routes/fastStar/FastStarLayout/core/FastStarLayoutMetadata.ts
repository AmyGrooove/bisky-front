import { Metadata } from 'next'
import { ENV } from '@shared/static'

const FastStarLayoutMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Быстрая оценка',
    openGraph: {
      title: 'Быстрая оценка | Bisky — Смотреть Аниме',
      url: `${ENV.APP_URL}/FastStar`,
    },
  }
}

export { FastStarLayoutMetadata }
