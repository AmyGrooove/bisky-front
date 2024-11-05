import { useState } from "react"
import {
  autoUpdate,
  flip,
  offset,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react"

import { IHintProps } from "../types/IHintProps"

const useHint = (props: IHintProps) => {
  const { children, hintElement } = props

  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const { refs, context, floatingStyles } = useFloating({
    open: isVisible,
    onOpenChange: setIsVisible,
    whileElementsMounted: autoUpdate,
    placement: "top",
    middleware: [
      offset(8),
      flip({
        mainAxis: true,
        crossAxis: true,
        fallbackAxisSideDirection: "end",
        flipAlignment: true,
      }),
    ],
  })

  const hover = useHover(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  const showHint = () => setIsVisible(true)

  const hideHint = () => {
    setIsClosing(true)

    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
    }, 100)
  }

  return {
    children,
    hintElement,
    refs,
    getReferenceProps,
    floatingStyles,
    getFloatingProps,
    isClosing,
    isVisible,
    hideHint,
    showHint,
  }
}

export { useHint }
