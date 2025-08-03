import { Viewport } from 'next'
import { META_DATA } from '@shared/static'
import '@shared/styles/global.scss'
import { Ubuntu } from 'next/font/google'
import Head from 'next/head'
import { ReactNode } from 'react'

export const metadata = META_DATA
export const viewport: Viewport = {}

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ru">
      <Head>
        <meta name="theme-color" content="#dd5480" />
      </Head>
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}

export default RootLayout
