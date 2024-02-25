const META_DATA = {
  // metadataBase: "",

  title: "Bisky — Смотреть Аниме онлайн",
  description:
    "Bisky — Смотреть Аниме онлайн бесплатно. Большая база лучших аниме с русской озвучкой в хорошем качестве",

  robots: "all",
  themeColor: "#dd5480",
  manifest: "/manifest.json",

  icons: {
    icon: "/favicon.ico",
    apple: "/favicons/favicon-apple.png",
    other: [
      {
        type: "image/svg+xml",
        url: "/favicons/favicon.svg",
      },
    ],
  },

  openGraph: {
    title: "Bisky — Смотреть Аниме онлайн",
    description:
      "Bisky — Смотреть Аниме онлайн бесплатно. Большая база лучших аниме с русской озвучкой в хорошем качестве",
    siteName: "Bisky",
    url: "https://bisky.one/",
    images: [
      {
        url: "/favicons/favicon-128x128.png",
        width: 128,
        height: 128,
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
