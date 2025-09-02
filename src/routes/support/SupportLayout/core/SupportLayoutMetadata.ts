import { Metadata } from 'next'
import { ENV } from '@shared/static'

const SupportLayoutMetadata = async (): Promise<Metadata> => {
  try {
    return {
      title: 'Поддержка',
      description: 'Поддержка',
      openGraph: {
        title: 'Поддержка | Bisky',
        description: 'Поддержка',
        images: `${ENV.APP_URL}/images/openGraph.png`,
      },
    }
  } catch (_) {
    return {}
  }
}

export { SupportLayoutMetadata }
