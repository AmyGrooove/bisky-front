import { ReactNode } from 'react'

interface IConfirmationModalProps {
  callBack: () => Promise<void>
  title: string

  yesButtonClassName?: string
  description?: ReactNode
}

export type { IConfirmationModalProps }
