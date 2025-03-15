import { forwardRef } from 'react'

import { cn } from '@shared/utils/functions'

import { ITextProps } from '../types/ITextProps'

import { useText } from './useText'
import st from './Text.module.scss'

const Text = forwardRef<HTMLElement, ITextProps>((props, ref) => {
  const { Component, children, weight, isCustomColor, className, inlineStyle } =
    useText(props)

  return (
    <Component
      ref={ref as any}
      className={cn(className, st.root, st[`weight_${weight}`], {
        [st.root_defaultColor]: !isCustomColor,
      })}
      style={inlineStyle}
    >
      {children}
    </Component>
  )
})

Text.displayName = 'Text'

export { Text }
