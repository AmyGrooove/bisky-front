import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import Head from 'next/head'
import '@/theme/style.scss'
import '@/theme/modification.scss'
import { Roboto } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <title>Bisky — Смотреть Аниме онлайн</title>
        <meta name="title" content="Bisky — Смотреть Аниме онлайн" />
        <meta property="og:title" content="Bisky — Смотреть Аниме онлайн" />
        <meta
          name="description"
          content="Bisky — Смотреть Аниме онлайн бесплатно. Большая база лучших аниме с русской озвучкой в хорошем качестве."
        />
        <meta
          property="og:description"
          content="Bisky — Смотреть Аниме онлайн бесплатно. Большая база лучших аниме с русской озвучкой в хорошем качестве."
        />
      </Head>
      <div id="__body" className={roboto.className}>
        <Header />
        <Component {...pageProps} className={roboto.className} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
