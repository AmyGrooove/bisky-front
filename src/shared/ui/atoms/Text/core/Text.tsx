import { forwardRef, memo } from 'react'
import { cn } from '@shared/utils/functions'

import { ITextProps } from '../types/ITextProps'

import { useText } from './useText'
import st from './Text.module.scss'

const Text = memo(
  forwardRef<HTMLElement, ITextProps>((props, ref) => {
    const { Component, children, className, weight, inlineStyle } =
      useText(props)

    return (
      <Component
        ref={ref}
        className={cn(className, st.root, st[`weight_${weight}`])}
        style={inlineStyle}
      >
        {children}
      </Component>
    )
  }),
)

Text.displayName = 'Text'

export { Text }
