import { ReactNode } from "react"
import { Roboto } from "next/font/google"

import "@/07-core/styles/global.scss"
import { META_DATA } from "@/01-shared/data"
import { Providers } from "@/07-core/providers"
import { Footer } from "@/04-widgets/Footer"
import { Header } from "@/04-widgets/Header"
import { BottomNavigation } from "@/04-widgets/BottomNavigation"

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
          <Header />
          <BottomNavigation />
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
