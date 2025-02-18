import {
  flip,
  offset,
  shift,
  useFloating,
  useHover,
  useInteractions,
} from '@floating-ui/react'

import { useTransitionClose } from '@shared/utils/hooks/useTransitionClose'

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

  const { isOpen, isClosing, toggle } = useTransitionClose({
    isToggleDisabled: hintChildren === null,
  })

  const { refs, floatingStyles, context } = useFloating({
    placement: position,
    open: isOpen,
    onOpenChange: toggle,
    middleware: [flip(), shift(), offset(margin)],
  })

  const hover = useHover(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  return {
    children,
    hintChildren,
    refs,
    isOpen,
    isClosing,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    className,
    hintChildrenClassName,
  }
}

export { useHint }
