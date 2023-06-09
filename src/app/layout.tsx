import { ReactNode } from "react"
import "@/theme/style.scss"
import Script from "next/script"

import Modal from "@/components/Modal"
import { APP_URL } from "@/constants"
import CheckDevice from "@/components/CheckDevice"

export const metadata = {
  metadataBase: new URL(APP_URL),

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

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ru">
      <head>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
;(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      ;(m[i].a = m[i].a || []).push(arguments)
    }
  m[i].l = 1 * new Date()
  for (var j = 0; j < document.scripts.length; j++) {
    if (document.scripts[j].src === r) {
      return
    }
  }
  ;(k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym")

ym(93051932, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
})
            `}
        </Script>
      </head>
      <body>
        <Modal>
          <CheckDevice>{children}</CheckDevice>
        </Modal>
      </body>
    </html>
  )
}

export default HomeLayout
