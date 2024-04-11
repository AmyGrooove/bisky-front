import { MetadataRoute } from "next"

import { APP_URL, API_URL } from "@shared/constants"
import { getAllAnimesId } from "@entities/Anime/api"

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  {
    url: APP_URL,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  },
  ...((await getAllAnimesId()).map((item) => ({
    url: `${API_URL}/anime/${item}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  })) as MetadataRoute.Sitemap),
]

export default sitemap
