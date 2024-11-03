"use client"

import Script from "next/script"

import { GOOGLE_ANALYTICS_ID } from "../../constants/analyticsIDs"

const GoogleAnalytics = () => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
    />
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GOOGLE_ANALYTICS_ID}');  
        `}
    </Script>
  </>
)

export { GoogleAnalytics }
