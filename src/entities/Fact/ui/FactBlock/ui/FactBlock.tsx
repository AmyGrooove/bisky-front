import Image from "next/image"

import { cn } from "@shared/utils/functions"
import { Text } from "@shared/ui/atoms"

import { IFactBlockProps } from "../types/IFactBlockProps"

import st from "./FactBlock.module.scss"

const FactBlock = (props: IFactBlockProps) => {
  const { fact, className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <Image
        width={200}
        height={168}
        src="/images/biskyLook.png"
        alt=""
        className={st.image}
      />
      <Text size="20">{fact.ru}</Text>
    </div>
  )
}

export { FactBlock }
