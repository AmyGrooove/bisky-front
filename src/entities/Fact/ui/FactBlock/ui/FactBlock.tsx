import Image from "next/image"

import { Text } from "@shared/ui/atoms/Text"
import { cn } from "@shared/utils/functions"

import { IFactBlockProps } from "../types/IFactBlockProps"

import st from "./FactBlock.module.scss"

const FactBlock = (props: IFactBlockProps) => {
  const { fact, className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <Image
        width={200}
        height={168}
        src="/images/biskyTips.png"
        alt=""
        className={st.image}
      />
      <Text size="20">{fact.ru}</Text>
    </div>
  )
}

export { FactBlock }
