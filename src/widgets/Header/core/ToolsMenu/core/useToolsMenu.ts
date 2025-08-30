import {
  useFloating,
  flip,
  shift,
  offset,
  useClick,
  useDismiss,
  useInteractions,
  useTransitionStyles,
  autoUpdate,
} from '@floating-ui/react'
import { useTransitionClose } from '@shared/utils/hooks/useTransitionClose'
import { useEffect } from 'react'
import { isNil } from '@shared/utils/functions'
import { useAuthGate } from '@entities/auth/hooks/useAuthGate'

import { IToolsMenuProps } from '../types/IToolsMenuProps'

const useToolsMenu = (props: IToolsMenuProps) => {
  const { children, onOpenChange } = props

  const { isOpen, toggle } = useTransitionClose()

  const { guardCall } = useAuthGate()

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: guardCall(toggle),
    placement: 'bottom-start',
    strategy: 'fixed',
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift(), offset(16)],
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
  ])

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 250,
    initial: { opacity: 0 },
    open: { opacity: 1 },
    close: { opacity: 0 },
  })

  useEffect(() => {
    if (!isNil(onOpenChange)) onOpenChange(isMounted)
  }, [isMounted, onOpenChange])

  return {
    children,
    refs,
    isMounted,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    transitionStyles,
  }
}

export { useToolsMenu }
