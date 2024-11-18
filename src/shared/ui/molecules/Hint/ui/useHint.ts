import { useRef, useState } from "react"
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
  const { children, hintElement, hintClassName } = props

  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const hideHintTimer = useRef<NodeJS.Timeout | null>(null)
  const closingTimer = useRef<NodeJS.Timeout | null>(null)

  const { refs, context, floatingStyles } = useFloating({
    open: isVisible,
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

  const isText = typeof hintElement === "string"

  const cancelHideHint = () => {
    if (hideHintTimer.current) {
      clearTimeout(hideHintTimer.current)
      hideHintTimer.current = null
    }

    if (closingTimer.current) {
      clearTimeout(closingTimer.current)
      closingTimer.current = null
    }
  }

  const showHint = () => {
    cancelHideHint()

    setIsVisible(true)
    setIsClosing(false)
  }

  const hideHint = () =>
    (hideHintTimer.current = setTimeout(() => {
      setIsClosing(true)

      closingTimer.current = setTimeout(() => {
        setIsVisible(false)
        setIsClosing(false)
      }, 200)
    }, 50))

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
    isText,
    cancelHideHint,
    hintClassName,
  }
}

export { useHint }
