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
import { useMemo } from 'react'
import { isNil } from '@shared/utils/functions'
import { useTransitionClose } from '@shared/utils/hooks/useTransitionClose'

import { IHintProps } from '../types/IHintProps'
import { Text } from '../../Text'

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

  const middleware = useMemo(() => [flip(), shift(), offset(margin)], [margin])

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: toggle,
    placement: position,
    whileElementsMounted: autoUpdate,
    middleware,
  })

  const hover = useHover(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 250,
    initial: { opacity: 0 },
    open: { opacity: 1 },
    close: { opacity: 0 },
  })

  const mergedStyles = useMemo(
    () => ({ ...floatingStyles, ...transitionStyles }),
    [floatingStyles, transitionStyles],
  )

  const hintContent = useMemo(() => {
    if (isNil(hintChildren)) return null

    return typeof hintChildren === 'string' ||
      typeof hintChildren === 'number' ? (
      <Text>{hintChildren}</Text>
    ) : (
      hintChildren
    )
  }, [hintChildren])

  return {
    children,
    hintChildren,
    refs,
    getReferenceProps,
    getFloatingProps,
    className,
    isMounted,
    hintChildrenClassName,
    hintContent,
    mergedStyles,
  }
}

export { useHint }
