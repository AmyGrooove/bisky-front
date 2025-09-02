import { Metadata } from 'next'
import { ENV } from '@shared/static'

const MenuLayoutMetadata = async (): Promise<Metadata> => {
  try {
    return {
      title: 'Меню',
      description: 'Меню',
      openGraph: {
        title: 'Меню | Bisky',
        description: 'Меню',
        images: `${ENV.APP_URL}/images/openGraph.png`,
      },
    }
  } catch (_) {
    return {}
  }
}

export { MenuLayoutMetadata }
