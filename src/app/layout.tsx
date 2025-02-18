import { Viewport } from 'next'
import { Ubuntu } from 'next/font/google'

import { META_DATA } from '@shared/static'
import 'keen-slider/keen-slider.min.css'
import '@shared/styles/global.scss'
import { ModalWrapper } from '@widgets/ModalWrapper'
import { IDefaultPageProps } from '@shared/types'
import { Header } from '@widgets/Header'
import { Footer } from '@widgets/Footer'
import { Bar } from '@widgets/Bar'
import { MiniLogo } from '@widgets/MiniLogo'

import st from './RootLayout.module.scss'

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = META_DATA
export const viewport: Viewport = {}

const RootLayout = (props: IDefaultPageProps) => {
  const { children } = props

  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#dd5480" />
      </head>
      <body className={ubuntu.className}>
        <ModalWrapper />
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

export default RootLayout
