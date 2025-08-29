import { ITextProps } from '../types/ITextProps'

const useText = (props: ITextProps) => {
  const {
    children,
    weight = '400',
    className,
    maxLines,
    maxChars,
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

  let content = children
  if (
    typeof children === 'string' &&
    typeof maxChars === 'number' &&
    children.length > maxChars
  ) {
    content = `${children.slice(0, maxChars)}...`
  }

  return { Component, children: content, className, weight, inlineStyle }
}

export { useText }
