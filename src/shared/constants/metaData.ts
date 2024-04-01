import { Metadata } from "next"

import { APP_URL } from "./envVariables"

const META_DATA: Metadata = {
  title: {
    template: "%s | Bisky",
    default: "Bisky",
  },
  description:
    "Bisky — Смотреть Аниме онлайн бесплатно. Большая база лучших аниме с русской озвучкой в хорошем качестве",
  keywords: ["аниме", "смотреть", "япония", "манга", "сериалы", "фильмы"],
  metadataBase: new URL(APP_URL),
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    url: APP_URL,
    siteName: "Bisky",
    locale: "ru-RU",
    title: "Bisky",
    description:
      "Bisky — Смотреть Аниме онлайн бесплатно. Большая база лучших аниме с русской озвучкой в хорошем качестве",
    images: [
      {
        url: `${APP_URL}/favicons/favicon-128x128.png`,
        width: 512,
        height: 512,
        alt: "Bisky",
      },
    ],
  },

  appleWebApp: {
    title: "Bisky",
    statusBarStyle: "black-translucent",
    startupImage: ["/favicons/favicon-128x128.png"],
  },
}

export { META_DATA }
