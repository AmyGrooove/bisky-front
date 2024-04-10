import { HTMLAttributes } from "react"

interface ILinkLabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  linkText: string
  href: string
}

export type { ILinkLabelProps }
