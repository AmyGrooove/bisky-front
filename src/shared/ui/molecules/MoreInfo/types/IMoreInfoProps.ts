import { ReactNode } from 'react'

interface IMoreInfoProps {
  children: ReactNode

  variant?: 'big' | 'small'
  label?: string
  className?: string
  ariaLabel?: string
}

export type { IMoreInfoProps }
