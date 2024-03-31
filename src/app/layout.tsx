import { ReactNode } from "react"
import { Ubuntu } from "next/font/google"

import { META_DATA } from "@shared/constants/metaData"
import "@shared/styles/global.scss"
import { Header } from "@features/Header"
import st from "@appData/mainLayout.module.scss"
import "keen-slider/keen-slider.min.css"
import { Footer } from "@features/Footer"

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = META_DATA

const HomeLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ru">
    <body className={ubuntu.className}>
      <Header className={st.generalSection} />
      <main className={st.main}>{children}</main>
      <Footer className={st.generalSection} />
    </body>
  </html>
)

export default HomeLayout
