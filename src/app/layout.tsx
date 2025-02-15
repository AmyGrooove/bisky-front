import { Viewport } from 'next'
import { Ubuntu } from 'next/font/google'

import { META_DATA } from '@shared/static'
import { IDefaultPageProps } from '@shared/types'

import 'keen-slider/keen-slider.min.css'
import '@shared/styles/global.scss'
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
        <main className={st.main}>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
