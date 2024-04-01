import { MetadataRoute } from "next"

import { APP_URL } from "@shared/constants/envVariables"

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: APP_URL,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  },
]

export default sitemap
