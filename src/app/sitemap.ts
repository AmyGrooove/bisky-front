import { ENV } from '@shared/static'
import { MetadataRoute } from 'next'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  {
    url: ENV.APP_URL,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
]

export default sitemap
