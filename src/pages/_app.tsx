import { AppProps } from "next/app"
import { ReactElement } from "react"
import Head from "next/head"
import "@/theme/style.scss"
import "@/theme/modification.scss"
import { Analytics } from "@vercel/analytics/react"
import { Roboto } from "next/font/google"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Modal from "@/components/Common/Modal"

const roboto = Roboto({
  weight: ["400", "700"],
})

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
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
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Modal>
      <Analytics />
    </>
  )
}

export default MyApp
