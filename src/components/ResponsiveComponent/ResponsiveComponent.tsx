import { ReactNode } from "react"
import { headers } from "next/headers"

interface IResponsiveComponent {
  mobile: ReactNode
  children: ReactNode
}

const ResponsiveComponent = ({ mobile, children }: IResponsiveComponent) => {
  const headersList = headers()
  const userAgent = headersList.get("user-agent")

  let isMobileView = userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
  )

  if (isMobileView) {
    return mobile
  } else {
    return children
  }
}

export default ResponsiveComponent
