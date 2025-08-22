import { ReactNode } from 'react'
import { Placement } from '@floating-ui/react'

import { IHintMenuItem } from './IHintMenuItem'

interface IHintMenuProps {
  items: IHintMenuItem[]
  children: ReactNode

  placement?: Placement
  onOpenChange?: (value: boolean) => void
  className?: string
}

export type { IHintMenuProps }
