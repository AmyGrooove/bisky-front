import {
  useFloating,
  flip,
  shift,
  offset,
  useClick,
  useDismiss,
  useInteractions,
  useTransitionStyles,
  useRole,
  autoUpdate,
} from '@floating-ui/react'
import { isNil } from '@shared/utils/functions'
import { useTransitionClose } from '@shared/utils/hooks/useTransitionClose'
import { useEffect } from 'react'
import { useTopLoader } from 'nextjs-toploader'

import { IHintMenuItem } from '../types/IHintMenuItem'
import { IHintMenuProps } from '../types/IHintMenuProps'

const useHintMenu = (props: IHintMenuProps) => {
  const { items, children, className, onOpenChange, placement = 'top' } = props

  const { done } = useTopLoader()

  const { isOpen, toggle } = useTransitionClose({
    isToggleDisabled: isNil(items) || items.length === 0,
  })

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: toggle,
    placement,
    strategy: 'fixed',
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift(), offset(4)],
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context, { role: 'menu' }),
  ])

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 250,
    initial: { opacity: 0 },
    open: { opacity: 1 },
    close: { opacity: 0 },
  })

  const open = () => toggle(true)
  const close = () => toggle(false)

  const handleItemClick = (item: IHintMenuItem) => () => {
    item.onClick()
    close()
  }

  useEffect(() => {
    if (!isNil(onOpenChange)) onOpenChange(isMounted)
  }, [isMounted, onOpenChange])

  return {
    items,
    children,
    refs,
    isMounted,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    className,
    open,
    close,
    handleItemClick,
    transitionStyles,
    done,
  }
}

export { useHintMenu }
