import { Metadata } from 'next'
import { ENV } from './ENV'

const META_DATA: Metadata = {
  title: { template: '%s | Bisky', default: 'Bisky — Смотреть Аниме' },
  description:
    'Bisky — Смотреть Аниме. Большая база лучших аниме с русской озвучкой в хорошем качестве',
  keywords: ['аниме', 'смотреть', 'япония', 'манга', 'сериалы', 'фильмы'],
  metadataBase: new URL(ENV.APP_URL),
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon-32x32.png',
    apple: '/favicons/apple-touch-icon.png',
  },

  openGraph: {
    type: 'website',
    url: ENV.APP_URL,
    siteName: 'Bisky — Смотреть Аниме',
    locale: 'ru-RU',
    title: 'Bisky',
    description:
      'Bisky — Смотреть Аниме. Большая база лучших аниме с русской озвучкой в хорошем качестве',
    images: [
      {
        url: `${ENV.APP_URL}/images/openGraph.png`,
        width: 512,
        height: 512,
        alt: 'Bisky',
      },
    ],
  },

  appleWebApp: {
    title: 'Bisky',
    statusBarStyle: 'black-translucent',
    startupImage: ['/favicons/favicon-128x128.png'],
  },
}

export { META_DATA }
