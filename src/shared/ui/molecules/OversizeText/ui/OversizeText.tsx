"use client"

import { useState } from "react"

import { Text } from "@shared/ui/atoms/Text"
import { cn } from "@shared/utils/functions"

import { IOversizeTextProps } from "../types/IOversizeTextProps"

import st from "./OversizeText.module.scss"

const OversizeText = (props: IOversizeTextProps) => {
  const { children, className, ...otherProps } = props

  const [isOpen, setIsOpen] = useState(false)

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
