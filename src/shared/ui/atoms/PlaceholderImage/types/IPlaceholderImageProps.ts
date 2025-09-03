import { CSSProperties } from 'react'

interface IPlaceholderImageProps {
  src: string | null
  sizes: [number, number]

  className?: string
  alt?: string
  onClick?: () => void
  objectFit?: CSSProperties['objectFit']
  style?: CSSProperties
  version?: string | number
}

export type { IPlaceholderImageProps }
