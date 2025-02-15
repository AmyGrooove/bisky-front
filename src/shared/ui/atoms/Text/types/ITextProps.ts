import { CSSProperties } from 'react'

interface ITextProps {
  children: string

  style?: CSSProperties
  size?: '12' | '16' | '20' | '24' | '32' | '40'
  weight?: '400' | '700'
  isCustomColor?: boolean
  className?: string
  maxLines?: number
}

export type { ITextProps }
