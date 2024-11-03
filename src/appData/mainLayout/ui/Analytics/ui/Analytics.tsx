import { Suspense } from "react"

import { GoogleAnalytics } from "./services/GoogleAnalytics"
import { YandexMetrika } from "./services/YandexMetrika"

const Analytics = () => (
  <Suspense>
    <YandexMetrika />
    <GoogleAnalytics />
  </Suspense>
)

export { Analytics }
