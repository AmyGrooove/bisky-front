import { useState } from "react"

import { IOversizeTextProps } from "../types/IOversizeTextProps"

const useOversizeText = (props: IOversizeTextProps) => {
  const { children, className, ...otherProps } = props

  const [isOpen, setIsOpen] = useState(false)

  return { children, className, otherProps, isOpen, setIsOpen }
}

export { useOversizeText }
