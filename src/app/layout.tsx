import { META_DATA, VIEWPORT } from '@shared/static'
import '@shared/styles/global.scss'
import { Ubuntu } from 'next/font/google'
import { ReactNode } from 'react'

export const metadata = META_DATA
export const viewport = VIEWPORT

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ru">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}

export default RootLayout
