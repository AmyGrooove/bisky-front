import { CSSProperties } from 'react'

import { ITextProps } from '../types/ITextProps'

const useText = (props: ITextProps) => {
  const {
    children,
    size = '16',
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
    size,
    weight,
    isCustomColor,
    className,
    inlineStyle,
  }
}

export { useText }
