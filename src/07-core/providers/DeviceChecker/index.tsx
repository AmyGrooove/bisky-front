import { ReactNode } from "react"
import { headers } from "next/headers"

interface IResponsiveComponent {
  desktop: ReactNode
  mobile: ReactNode
}

const DeviceChecker = ({ desktop, mobile }: IResponsiveComponent) => {
  const userAgent = headers().get("user-agent")

  let isMobileView = userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
  )

  if (isMobileView) {
    return mobile
  } else {
    return desktop
  }
}

export { DeviceChecker }
