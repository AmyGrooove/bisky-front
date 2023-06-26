import { ReactNode } from "react"
import { Roboto } from "next/font/google"

import "@/theme/style.scss"
import Providers from "@/components/Providers"
import Footer from "@/components/layout/Footer"
import { META_DATA } from "@/constants"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = META_DATA

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Providers>
          <main className="main">
            <div className="main__content">{children}</div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default HomeLayout
