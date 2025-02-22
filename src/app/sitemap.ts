import { getAnimeSitemap } from '@entities/anime/api'
import { ENV } from '@shared/static'
import { MetadataRoute } from 'next'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  {
    url: ENV.APP_URL,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  ...((await getAnimeSitemap()).map((item) => ({
    url: `${ENV.APP_URL}/anime/${item._id}`,
    lastModified: item.updatedOn,
    changeFrequency: 'daily',
    priority: 0.8,
  })) as MetadataRoute.Sitemap),
]

export default sitemap
