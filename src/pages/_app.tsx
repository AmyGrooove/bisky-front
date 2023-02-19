import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import Head from 'next/head'

import '@/theme/style.scss'
import '@/theme/modification.scss'
import '@/theme/fonts.scss'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/bisky_logo.svg" />
        <title>Bisky</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
