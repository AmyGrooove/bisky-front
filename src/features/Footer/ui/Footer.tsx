import Link from "next/link"

import { cn } from "@shared/utils/functions"
import { Text } from "@shared/ui/atoms"

import { IFooterProps } from "../types/IFooterProps"

import st from "./Footer.module.scss"

const Footer = (props: IFooterProps) => {
  const { className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <Link
        href="https://hunterxhunter.fandom.com/ru/wiki/Бискет_Крюгер"
        target="_blank"
      >
        <Text weight="700" size="20">
          Bisky
        </Text>
      </Link>
    </div>
  )
}

export { Footer }
