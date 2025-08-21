import { ReactNode } from 'react'

import { IHintMenuItem } from './IHintMenuItem'

interface IHintMenuProps {
  items: IHintMenuItem[]
  children: ReactNode

  className?: string
}

export type { IHintMenuProps }
