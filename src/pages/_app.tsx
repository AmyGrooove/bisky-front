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
        <title>Bisky</title>
        <style>{`* { font-family: ${roboto.style.fontFamily} !important }`}</style>
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/favicons/favicon-apple.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicons/favicon-64x64.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicons/favicon-128x128.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/favicons/favicon-256x256.png"
        />
        <link
          rel="icon" type="image/x-icon"
          href="/favicons/favicon.ico" />
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
