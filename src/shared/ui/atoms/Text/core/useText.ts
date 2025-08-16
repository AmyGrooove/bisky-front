import { ITextProps } from '../types/ITextProps'

const useText = (props: ITextProps) => {
  const {
    children,
    weight = '400',
    className,
    maxLines,
    style,
    as: Component = 'div',
  } = props

  const inlineStyle = maxLines
    ? {
        ...style,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: maxLines,
        overflow: 'hidden',
      }
    : style

  return { Component, children, className, weight, inlineStyle }
}

export { useText }
