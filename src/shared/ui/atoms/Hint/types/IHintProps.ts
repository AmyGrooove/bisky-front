import { Placement } from '@floating-ui/react'
import { ReactNode } from 'react'

interface IHintProps {
  hintChildren: ReactNode
  children: ReactNode

  margin?: number
  position?: Placement
  className?: string
  hintChildrenClassName?: string
}

export type { IHintProps }
