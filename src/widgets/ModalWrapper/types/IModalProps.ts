import { ReactNode } from 'react'

interface IModalProps {
  children: ReactNode
  closeFunction: () => void
  isModalClosing: boolean
}

export type { IModalProps }
