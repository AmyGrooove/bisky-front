import { LinkProps } from "next/link"

interface ITabProps extends LinkProps {
  text: string
  href: string
  active?: boolean
}

export type { ITabProps }
