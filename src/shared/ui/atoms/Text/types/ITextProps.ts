import { CSSProperties, ElementType, ReactNode } from 'react'

interface ITextProps<T extends ElementType = ElementType> {
  children: ReactNode

  style?: CSSProperties
  weight?: '400' | '700'
  isCustomColor?: boolean
  className?: string
  maxLines?: number
  as?: T
}

export type { ITextProps }
