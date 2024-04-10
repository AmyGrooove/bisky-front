import { LinkProps } from "next/link"
import { HTMLAttributes } from "react"

interface ILinkTabItem extends LinkProps {
  name: string
  isActive?: boolean
  isDisabled?: boolean
}

interface ILinkTabsProps extends HTMLAttributes<HTMLDivElement> {
  items: ILinkTabItem[]
}

export type { ILinkTabsProps }
