import { getAnimeSitemap } from '@entities/anime/api/getAnimeSitemap'
import { getFranchiseSitemap } from '@entities/franchise/api/getFranchiseSitemap'
import { getGenreSitemap } from '@entities/genre/api/getGenreSitemap'
import { getStudioSitemap } from '@entities/studio/api/getStudioSitemap'
import { ENV } from '@shared/static'
import { MetadataRoute } from 'next'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  {
    url: ENV.APP_URL,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  ...((await getGenreSitemap(true)).map((item) => ({
    url: `${ENV.APP_URL}/genre/${item._id}`,
    changeFrequency: 'weekly',
    priority: 0.7,
  })) as MetadataRoute.Sitemap),
  ...((await getStudioSitemap(true)).map((item) => ({
    url: `${ENV.APP_URL}/studio/${item._id}`,
    changeFrequency: 'weekly',
    priority: 0.6,
  })) as MetadataRoute.Sitemap),
  ...((await getFranchiseSitemap(true)).map((item) => ({
    url: `${ENV.APP_URL}/franchise/${item._id}`,
    changeFrequency: 'weekly',
    priority: 0.5,
  })) as MetadataRoute.Sitemap),
  ...((await getAnimeSitemap(true)).map((item) => ({
    url: `${ENV.APP_URL}/anime/${item._id}`,
    lastModified: item.updatedOn,
    changeFrequency: 'daily',
    priority: 0.8,
  })) as MetadataRoute.Sitemap),
]

export default sitemap
