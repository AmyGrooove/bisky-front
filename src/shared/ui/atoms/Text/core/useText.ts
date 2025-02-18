import { CSSProperties } from 'react'

import { ITextProps } from '../types/ITextProps'

const useText = (props: ITextProps) => {
  const {
    children,
    weight = '400',
    isCustomColor = false,
    className = null,
    maxLines,
    style,
  } = props

  const inlineStyle: CSSProperties | undefined = maxLines
    ? {
        ...style,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: maxLines,
        overflow: 'hidden',
      }
    : style

  return {
    children,
    weight,
    isCustomColor,
    className,
    inlineStyle,
  }
}

export { useText }
