import { ReactNode } from "react"
import { Roboto } from "next/font/google"
import "@/theme/style.scss"

import Modal from "@/components/Modal"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ResponsiveComponent from "@/components/ResponsiveComponent/ResponsiveComponent"
import BottomNavigation from "@/components/BottomNavigation"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
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

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Modal>
          <ResponsiveComponent mobile={<BottomNavigation />}>
            <Header />
          </ResponsiveComponent>
          <main className="main">
            <div className="main__content">{children}</div>
          </main>
          <Footer />
        </Modal>
      </body>
    </html>
  )
}

export default HomeLayout
