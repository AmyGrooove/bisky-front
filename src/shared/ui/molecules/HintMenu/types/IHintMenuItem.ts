import { ReactNode } from 'react'

interface IHintMenuItem {
  text: string
  onClick: () => void

  IconLeft?: ReactNode
  IconRight?: ReactNode
  isSelected?: boolean
}

export type { IHintMenuItem }
