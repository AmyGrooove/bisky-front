import { Metadata } from 'next'
import { ENV } from '@shared/static'

const SettingsLayoutMetadata = async (): Promise<Metadata> => {
  try {
    return {
      title: 'Настройки',
      description: 'Настройки',
      openGraph: {
        title: 'Настройки | Bisky',
        description: 'Настройки',
        images: `${ENV.APP_URL}/images/openGraph.png`,
      },
    }
  } catch (_) {
    return {}
  }
}

export { SettingsLayoutMetadata }
