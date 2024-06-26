import { MetadataRoute } from "next"

import { APP_URL } from "@shared/constants"

const manifest = (): MetadataRoute.Manifest => ({
  name: "Bisky",
  short_name: "Bisky",
  start_url: APP_URL,
  icons: [
    { src: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { src: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { src: "/favicons/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    {
      src: "/favicons/favicon-128x128.png",
      sizes: "128x128",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-256x256.png",
      sizes: "256x256",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/favicons/maskable_icon.png",
      sizes: "320x320",
      type: "image/png",
      purpose: "maskable",
    },
  ],
  theme_color: "#dd5480",
  background_color: "#170e19",
  description:
    "Bisky — Смотреть Аниме онлайн бесплатно. Большая база лучших аниме с русской озвучкой в хорошем качестве",
  display: "standalone",
})

export default manifest
