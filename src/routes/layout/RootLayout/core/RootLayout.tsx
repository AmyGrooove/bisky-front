import { Ubuntu } from 'next/font/google'
import { Bar } from '@widgets/Bar'
import { Footer } from '@widgets/Footer'
import { Header } from '@widgets/Header'
import { MiniLogo } from '@widgets/MiniLogo'

import { IRootLayoutProps } from '../types/IRootLayoutProps'

import st from './RootLayout.module.scss'
import { useRootLayout } from './useRootLayout'
import { Providers } from './Providers'
import { OAuthProvider } from './OAuthProvider'

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = (props: IRootLayoutProps) => {
  const { children, dehydratedState } = useRootLayout(props)

  return (
    <html lang="ru">
      <body className={ubuntu.className}>
        <Providers dehydratedState={dehydratedState}>
          <main className={st.main}>
            <OAuthProvider />
            <MiniLogo />
            <Header />
            {children}
            <Footer />
            <Bar />
          </main>
        </Providers>
      </body>
    </html>
  )
}

export { RootLayout }
