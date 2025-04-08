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
    icon: [
      { url: '/favicons/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicons/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      {
        url: '/favicons/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicons/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
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
    startupImage: ['/favicons/favicon-180x180.png'],
  },
}

export { META_DATA }
