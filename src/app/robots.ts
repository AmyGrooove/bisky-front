import { MetadataRoute } from "next"

import { APP_URL, IS_DEVELOPMENT } from "@shared/constants/envVariables"

const robots = (): MetadataRoute.Robots =>
  IS_DEVELOPMENT
    ? {
        rules: [
          { userAgent: "*", disallow: "/" },
          { userAgent: "Googlebot", disallow: "/" },
          { userAgent: "Yandex", disallow: "/" },
        ],
        sitemap: `${APP_URL}/sitemap.xml`,
      }
    : {
        rules: [
          { userAgent: "*", allow: "/" },
          { userAgent: "Googlebot", allow: "/" },
          { userAgent: "Yandex", allow: "/" },
        ],
        sitemap: `${APP_URL}/sitemap.xml`,
      }

export default robots
