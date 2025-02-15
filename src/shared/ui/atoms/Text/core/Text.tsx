import { forwardRef } from 'react'

import { cn } from '@shared/utils/functions'

import { ITextProps } from '../types/ITextProps'

import { useText } from './useText'
import st from './Text.module.scss'

const Text = forwardRef<HTMLDivElement, ITextProps>((props, ref) => {
  const { children, size, weight, isCustomColor, className, inlineStyle } =
    useText(props)

  return (
    <div
      ref={ref}
      className={cn(
        className,
        st.root,
        st[`size_${size}`],
        st[`weight_${weight}`],
        { [st.root_defaultColor]: !isCustomColor },
      )}
      style={inlineStyle}
    >
      {children}
    </div>
  )
})

Text.displayName = 'Text'

export { Text }
