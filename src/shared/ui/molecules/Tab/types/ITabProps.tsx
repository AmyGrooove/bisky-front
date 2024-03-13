import { AnchorHTMLAttributes } from "react"

interface ITabProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
  href: string
  active?: boolean
}

export type { ITabProps }
