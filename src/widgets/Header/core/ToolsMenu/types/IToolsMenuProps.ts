import { ReactNode } from 'react'

interface IToolsMenuProps {
  children: ReactNode

  onOpenChange?: (value: boolean) => void
}

export type { IToolsMenuProps }
