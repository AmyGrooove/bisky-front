import { MetadataRoute } from 'next'

import { ENV } from '@shared/static'

const robots = (): MetadataRoute.Robots =>
  ENV.IS_DEVELOPMENT
    ? {
        rules: [
          { userAgent: '*', disallow: '/' },
          { userAgent: 'Googlebot', disallow: '/' },
          { userAgent: 'Yandex', disallow: '/' },
        ],
        sitemap: `${ENV.APP_URL}/sitemap.xml`,
      }
    : {
        rules: [
          { userAgent: '*', allow: '/' },
          { userAgent: 'Googlebot', allow: '/' },
          { userAgent: 'Yandex', allow: '/' },
        ],
        sitemap: `${ENV.APP_URL}/sitemap.xml`,
      }

export default robots
