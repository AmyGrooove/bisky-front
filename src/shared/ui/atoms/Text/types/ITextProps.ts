import { CSSProperties, ReactNode } from 'react'

interface ITextProps {
  children: ReactNode

  style?: CSSProperties
  weight?: '400' | '700'
  isCustomColor?: boolean
  className?: string
  maxLines?: number
}

export type { ITextProps }
