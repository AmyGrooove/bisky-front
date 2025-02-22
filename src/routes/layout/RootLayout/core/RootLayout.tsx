import Head from 'next/head'
import { Ubuntu } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import { Bar } from '@widgets/Bar'
import { Footer } from '@widgets/Footer'
import { Header } from '@widgets/Header'
import { MiniLogo } from '@widgets/MiniLogo'
import { ModalWrapper } from '@widgets/ModalWrapper'

import { IRootLayoutProps } from '../types/IRootLayoutProps'

import st from './RootLayout.module.scss'

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = async (props: IRootLayoutProps) => {
  const { children } = props

  return (
    <html lang="ru">
      <Head>
        <meta name="theme-color" content="#dd5480" />
      </Head>
      <body className={ubuntu.className}>
        <ModalWrapper />
        <NextTopLoader color="var(--bisky-100)" showSpinner={false} />
        <main className={st.main}>
          <MiniLogo />
          <Header />
          {children}
          <Footer />
          <Bar />
        </main>
      </body>
    </html>
  )
}

export { RootLayout }
