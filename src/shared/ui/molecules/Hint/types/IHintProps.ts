import { Placement } from '@floating-ui/react'
import { ReactElement, ReactNode } from 'react'

interface IHintProps {
  hintChildren: string | ReactElement<HTMLDivElement> | null
  children: ReactNode

  margin?: number
  position?: Placement
  className?: string
  hintChildrenClassName?: string
}

export type { IHintProps }
