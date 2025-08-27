import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react'
import { isNil } from '@shared/utils/functions'
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

  const { isOpen, toggle } = useTransitionClose({
    isToggleDisabled: isNil(hintChildren),
  })

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: toggle,
    placement: position,
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift(), offset(margin)],
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
  ])

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 250,
    initial: { opacity: 0 },
    open: { opacity: 1 },
    close: { opacity: 0 },
  })

  return {
    children,
    hintChildren,
    refs,
    transitionStyles,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    className,
    isMounted,
    hintChildrenClassName,
  }
}

export { useHint }
