import { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
  name: 'Bisky',
  short_name: 'Bisky',
  start_url: '/',
  icons: [
    { src: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    {
      src: '/favicons/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/favicons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: '/favicons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable',
    },
  ],
  theme_color: '#dd5480',
  background_color: '#170e19',
  description:
    'Bisky — Смотреть Аниме онлайн бесплатно. Большая база лучших аниме с русской озвучкой в хорошем качестве',
  display: 'standalone',
})

export default manifest
