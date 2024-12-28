import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"

import { IHeaderProps } from "../types/IHeaderProps"

const useHeader = (props: IHeaderProps) => {
  const { className, ...otherProps } = props

  const pathname = usePathname()
  const { data: session, status } = useSession()

  return { pathname, className, otherProps, session, status }
}

export { useHeader }
