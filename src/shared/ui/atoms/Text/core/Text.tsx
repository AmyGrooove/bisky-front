import { forwardRef, memo } from 'react'

import { ITextProps } from '../types/ITextProps'

import { useText } from './useText'

const Text = memo(
  forwardRef<HTMLElement, ITextProps>((props, ref) => {
    const { Component, children, classes, inlineStyle } = useText(props)

    return (
      <Component ref={ref} className={classes} style={inlineStyle}>
        {children}
      </Component>
    )
  }),
)

Text.displayName = 'Text'

export { Text }
