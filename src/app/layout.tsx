import { ReactNode } from "react"
import { Ubuntu } from "next/font/google"

import { META_DATA } from "@shared/constants/metaData"
import "@shared/styles/global.scss"

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = META_DATA

const HomeLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ru">
    <body className={ubuntu.className}>
      <main className="main">{children}</main>
    </body>
  </html>
)

export default HomeLayout
