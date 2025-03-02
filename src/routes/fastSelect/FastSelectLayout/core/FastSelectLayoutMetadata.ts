import { Metadata } from 'next'
import { ENV } from '@shared/static'

const FastSelectLayoutMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Быстрый выбор',
    openGraph: {
      title: 'Быстрый выбор | Bisky — Смотреть Аниме',
      url: `${ENV.APP_URL}/FastSelect`,
    },
  }
}

export { FastSelectLayoutMetadata }
