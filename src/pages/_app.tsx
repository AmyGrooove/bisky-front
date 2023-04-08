import { AppProps } from "next/app"
import { ReactElement } from "react"
import Head from "next/head"
import "@/theme/style.scss"
import "@/theme/modification.scss"
import { Analytics } from "@vercel/analytics/react"
import { Roboto } from "next/font/google"

import Header from "@/components/desktop/Header"
import Footer from "@/components/desktop/Footer"
import Modal from "@/components/Modal"
import useWindowSize from "@/supportingTool/functions/useWindowSize"
import Menu from "@/components/mobile/Menu"

const roboto = Roboto({
  weight: ["400", "700"],
})

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const { mobile } = useWindowSize()

  return (
    <>
      <Head>
        <title>Bisky — Смотреть Аниме онлайн</title>
        <meta
          name="description"
          content="Bisky — Смотреть Аниме онлайн бесплатно. Большая база лучших аниме с русской озвучкой в хорошем качестве."
        />
        <meta name="url" content="https://bisky.one" />

        <link rel="image_src" href="/favicons/favicon-128x128.png" />

        <meta name="og:title" content="Bisky — Смотреть Аниме онлайн" />
        <meta
          name="og:description"
          content="Bisky — Смотреть Аниме онлайн бесплатно. Большая база лучших аниме с русской озвучкой в хорошем качестве."
        />
        <meta name="og:url" content="https://bisky.one" />
        <meta name="og:image" content="/favicons/favicon-128x128.png" />
      </Head>
      <Modal>
        <div id="__body" className={roboto.className}>
          {mobile ? <Menu /> : <Header />}
          <Component {...pageProps} />
          {/* <Footer /> */}
        </div>
      </Modal>
      <Analytics />
    </>
  )
}

export default MyApp
