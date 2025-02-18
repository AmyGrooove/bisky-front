import { CSSProperties } from 'react'

interface ITextProps {
  children: string

  style?: CSSProperties
  weight?: '400' | '700'
  isCustomColor?: boolean
  className?: string
  maxLines?: number
}

export type { ITextProps }
