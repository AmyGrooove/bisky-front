import { Text } from '@shared/ui/atoms/Text'
import { cn, isNil } from '@shared/utils/functions'
import { FloatingPortal } from '@floating-ui/react'

import { IHintProps } from '../types/IHintProps'

import { useHint } from './useHint'
import st from './Hint.module.scss'

const Hint = (props: IHintProps) => {
  const {
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
  } = useHint(props)

  return (
    <>
      <span
        {...getReferenceProps()}
        ref={refs.setReference}
        className={className}
      >
        {children}
      </span>
      {isMounted && !isNil(hintChildren) && (
        <FloatingPortal>
          <div
            {...getFloatingProps()}
            ref={refs.setFloating}
            style={{ ...floatingStyles, ...transitionStyles }}
            className={cn(st.hintWrapper, hintChildrenClassName)}
            role="tooltip"
          >
            {typeof hintChildren === 'string' ||
            typeof hintChildren === 'number' ? (
              <Text>{hintChildren}</Text>
            ) : (
              hintChildren
            )}
          </div>
        </FloatingPortal>
      )}
    </>
  )
}

export { Hint }
