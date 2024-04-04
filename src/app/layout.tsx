import { ReactNode, Suspense } from "react"
import { Ubuntu } from "next/font/google"
import { Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { META_DATA } from "@shared/constants"
import "@shared/styles/global.scss"
import { Header } from "@features/Header"
import st from "@appData/mainLayout/styles/mainLayout.module.scss"
import "keen-slider/keen-slider.min.css"
import { Footer } from "@features/Footer"
import { GoogleAnalytics, Providers, YandexMetrika } from "@appData/mainLayout"

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = META_DATA
export const viewport: Viewport = {}

const HomeLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ru">
    <head>
      <meta name="theme-color" content="#dd5480" />
    </head>
    <body className={ubuntu.className}>
      <Suspense>
        <YandexMetrika />
        <GoogleAnalytics />
      </Suspense>
      <Providers>
        <Header className={st.generalSection} />
        <main className={st.main}>{children}</main>
        <Footer className={st.generalSection} />
        <Analytics />
        <SpeedInsights />
      </Providers>
    </body>
  </html>
)

export default HomeLayout
