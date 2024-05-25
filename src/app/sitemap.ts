import { MetadataRoute } from "next"

import { APP_URL } from "@shared/constants"
import { getAllAnimesIdAndUpdateDate } from "@entities/Anime/api"
import { getAllFranchiseIds } from "@entities/Franchise/api"

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  {
    url: APP_URL,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: `${APP_URL}/catalog`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: `${APP_URL}/genres`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.2,
  },
  ...((await getAllFranchiseIds()).map((item) => ({
    url: `${APP_URL}/franchise/${item}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  })) as MetadataRoute.Sitemap),
  ...((await getAllAnimesIdAndUpdateDate()).map((item) => ({
    url: `${APP_URL}/anime/${item._id}`,
    lastModified: item.updateDate,
    changeFrequency: "daily",
    priority: 0.8,
  })) as MetadataRoute.Sitemap),
]

export default sitemap
