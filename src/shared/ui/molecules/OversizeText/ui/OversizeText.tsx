"use client"

import { Text } from "@shared/ui/atoms"
import { cn } from "@shared/utils/functions"

import { IOversizeTextProps } from "../types/IOversizeTextProps"

import st from "./OversizeText.module.scss"
import { useOversizeText } from "./useOversizeText"

const OversizeText = (props: IOversizeTextProps) => {
  const { children, className, otherProps, isOpen, setIsOpen } =
    useOversizeText(props)

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <Text
        {...otherProps}
        className={cn(st.text, { [st.text_opened]: isOpen })}
      >
        {children}
      </Text>
      {String(children).length >= 560 && (
        <Text
          onClick={() => setIsOpen((prevState) => !prevState)}
          weight="700"
          size={otherProps.size}
          className={st.moreButton}
        >
          {isOpen ? "Скрыть" : "Раскрыть"}
        </Text>
      )}
    </div>
  )
}

export { OversizeText }
