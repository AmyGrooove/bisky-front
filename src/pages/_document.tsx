import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#dd5480" />
          <meta name="msapplication-TileColor" content="#dd5480" />
          <meta property="og:url" content="https://bisky.one/" />
          <link href="https://bisky.one/" rel="canonical" />
          <meta property="og:site_name" content="Bisky" />
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
          <link
            rel="icon" type="image/x-icon"
            href="/favicon.ico" />
          <link
            rel="icon" type="image/svg+xml"
            href="/favicons/favicon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
