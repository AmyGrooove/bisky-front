import { Metadata } from 'next'
import { ENV } from '@shared/static'

const LegalLayoutMetadata = async (): Promise<Metadata> => {
  try {
    return {
      title: 'Информация',
      description: 'Информация',
      openGraph: {
        title: 'Информация | Bisky — Смотреть Аниме',
        description: 'Информация',
        images: `${ENV.APP_URL}/images/openGraph.png`,
      },
    }
  } catch (_) {
    return {}
  }
}

export { LegalLayoutMetadata }
