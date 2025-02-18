import { ReactNode } from 'react'

interface IModalProps {
  children: ReactNode
  closeFunction: () => void
}

export type { IModalProps }
