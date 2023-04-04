import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta name="robots" content="all" />
          <meta name="theme-color" content="#dd5480" />
          <meta name="msapplication-TileColor" content="#dd5480" />
          <meta
            name="msapplication-TileImage"
            content="/favicons/favicon-apple.png"
          />

          <link href="https://bisky.one/" rel="canonical" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="180x180"
            href="/favicons/favicon-apple.png"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />

          <meta name="og:site_name" content="Bisky" />

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-HVWD016914"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-HVWD016914');
            `}
          </Script>

          <Script id="yandex-metrika" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
              ym(93051932, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
              });
            `}
          </Script>
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
