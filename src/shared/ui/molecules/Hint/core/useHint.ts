import {
  flip,
  offset,
  shift,
  useFloating,
  useHover,
  useInteractions,
} from '@floating-ui/react'
import { useState } from 'react'

import { IHintProps } from '../types/IHintProps'

const useHint = (props: IHintProps) => {
  const {
    hintChildren,
    children,
    className,
    position = 'top',
    margin = 0,
    hintChildrenClassName,
  } = props

  const [isHintOpen, setIsHintOpen] = useState(false)
  const [isHintClosing, setIsHintClosing] = useState(false)

  const toggleHint = (isOpen: boolean) => {
    if (hintChildren === null) return

    if (isOpen) {
      setIsHintOpen(true)
      return
    }

    setIsHintClosing(true)

    setTimeout(() => {
      setIsHintOpen(false)
      setIsHintClosing(false)
    }, 100)
  }

  const { refs, floatingStyles, context } = useFloating({
    placement: position,
    open: isHintOpen,
    onOpenChange: toggleHint,
    middleware: [flip(), shift(), offset(margin)],
  })

  const hover = useHover(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  return {
    children,
    hintChildren,
    refs,
    isHintOpen,
    isHintClosing,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    className,
    hintChildrenClassName,
  }
}

export { useHint }
