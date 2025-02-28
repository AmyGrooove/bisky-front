import { Metadata } from 'next'
import { ENV } from '@shared/static'

const FastFindLayoutMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Быстрый поиск',
    openGraph: {
      title: 'Быстрый поиск | Bisky — Смотреть Аниме',
      url: `${ENV.APP_URL}/fastFind`,
    },
  }
}

export { FastFindLayoutMetadata }
