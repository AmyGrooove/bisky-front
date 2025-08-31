import { ReactNode } from 'react'

interface ISectionLabelProps {
  children: string

  goBackClick?: () => void
  additionalOnClick?: () => void
  Icon?: ReactNode
  className?: string
}

export type { ISectionLabelProps }
