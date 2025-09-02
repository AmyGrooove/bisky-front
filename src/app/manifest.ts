import { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
  name: 'Bisky',
  short_name: 'Bisky',
  start_url: '/',
  theme_color: '#dd5480',
  background_color: '#170e19',
  description:
    'Bisky онлайн бесплатно. Большая база лучших аниме с русской озвучкой в хорошем качестве',
  display: 'standalone',
  icons: [
    { src: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    {
      src: '/favicons/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/favicons/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'maskable',
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
  screenshots: [
    {
      src: '/screenshots/desktop.png',
      sizes: '1920x1080',
      type: 'image/png',
      form_factor: 'wide',
    },
    {
      src: '/screenshots/mobile.png',
      sizes: '414x896',
      type: 'image/png',
    },
  ],
})

export default manifest
