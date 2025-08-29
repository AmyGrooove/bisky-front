'use client'

import { memo } from 'react'
import { cn, isNil } from '@shared/utils/functions'
import { FloatingPortal } from '@floating-ui/react'

import { IHintProps } from '../types/IHintProps'

import { useHint } from './useHint'
import st from './Hint.module.scss'

const Hint = memo((props: IHintProps) => {
  const {
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
            style={mergedStyles}
            className={cn(st.hintWrapper, hintChildrenClassName)}
          >
            {hintContent}
          </div>
        </FloatingPortal>
      )}
    </>
  )
})

Hint.displayName = 'Hint'

export { Hint }
