import { Suspense } from "react"

import { GoogleAnalytics } from "./services/GoogleAnalytics"
import { YandexMetrika } from "./services/YandexMetrika"

const Analytics = () => {
  return (
    <Suspense>
      <YandexMetrika />
      <GoogleAnalytics />
    </Suspense>
  )
}

export { Analytics }
