import { MetadataRoute } from "next"

import { APP_URL } from "@shared/constants/envVariables"

const robots = (): MetadataRoute.Robots => ({
  rules: [
    { userAgent: "*", allow: "/" },
    { userAgent: "Googlebot", allow: "/" },
    { userAgent: "Yandex", allow: "/" },
  ],
  sitemap: `${APP_URL}/sitemap.xml`,
})

export default robots
