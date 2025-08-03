import { Viewport } from 'next'
import { META_DATA } from '@shared/static'
import '@shared/styles/global.scss'
import { Ubuntu } from 'next/font/google'
import Head from 'next/head'

export const metadata = META_DATA
export const viewport: Viewport = {}

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = () => {
  return (
    <html lang="ru">
      <Head>
        <meta name="theme-color" content="#dd5480" />
      </Head>
      <body className={ubuntu.className}>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#170e19',
          }}
        >
          <h1 style={{ color: 'white' }}>Сайт в доработке</h1>
          <p style={{ color: 'white' }}>Мы работаем над улучшением сайта.</p>
          <p style={{ color: 'white' }}>Пожалуйста, вернитесь позже.</p>
          <img src="/images/biskyLook.png" alt="" width={200} />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
