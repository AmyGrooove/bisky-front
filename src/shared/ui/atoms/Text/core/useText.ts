import { useMemo } from 'react'
import { cn } from '@shared/utils/functions'

import { ITextProps } from '../types/ITextProps'

import st from './Text.module.scss'

const useText = (props: ITextProps) => {
  const {
    children,
    weight = '400',
    className,
    maxLines,
    style,
    as: Component = 'div',
  } = props

  const inlineStyle = useMemo(
    () =>
      maxLines
        ? {
            ...style,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: maxLines,
            overflow: 'hidden',
          }
        : style,
    [maxLines, style],
  )

  const classes = useMemo(
    () => cn(className, st.root, st[`weight_${weight}`]),
    [className, weight],
  )

  return { Component, children, classes, inlineStyle }
}

export { useText }
