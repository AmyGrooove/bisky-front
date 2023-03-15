import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import Head from 'next/head'

import '@/theme/style.scss'
import '@/theme/modification.scss'
import { Roboto } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '300', '400', '500', '700'],
  subsets: ['latin'],
})

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dd5480" />
        <meta name="msapplication-TileColor" content="#dd5480" />
        <meta property="og:url" content="https://bisky.one/" />
        <link href="https://bisky.one/" rel="canonical" />
        <title>Bisky — Смотреть Аниме онлайн</title>
        <meta property="og:site_name" content="Bisky" />
        <meta name="apple-mobile-web-app-title" content="Bisky" />
        <meta name="application-name" content="Bisky" />
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
        <meta
          name="keywords"
          content="bisky биски бисквит аниме смотреть онлайн бесплатно в хорошем качестве лучшее"
        />
        <meta
          name="msapplication-TileImage"
          content="/favicons/favicon-apple.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/favicons/favicon-apple.png"
        />
        <style>{`* { font-family: ${roboto.style.fontFamily} !important }`}</style>
        <link
          rel="icon" type="image/x-icon"
          href="/favicon.ico" />
        <link
          rel="icon" type="image/svg+xml"
          href="/favicons/favicon.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
