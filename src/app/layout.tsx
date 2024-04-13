import { Ubuntu } from "next/font/google"
import { Viewport } from "next"

import { META_DATA } from "@shared/constants"
import "@shared/styles/global.scss"
import { Header } from "@features/Header"
import "keen-slider/keen-slider.min.css"
import { Footer } from "@features/Footer"
import {
  IMainLayoutProps,
  Providers,
  mainLayoutStyles as st,
} from "@appData/mainLayout"

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = META_DATA
export const viewport: Viewport = {}

const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props

  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#dd5480" />
      </head>
      <body className={ubuntu.className}>
        <Providers>
          <Header className={st.generalSection} />
          <main className={st.main}>{children}</main>
          <Footer className={st.generalSection} />
        </Providers>
      </body>
    </html>
  )
}

export default MainLayout
