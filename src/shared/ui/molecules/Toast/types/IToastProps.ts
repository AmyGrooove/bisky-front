import { ReactNode } from 'react'

interface IToastAction {
  text: string
  callback: () => void
}

interface IToastProps {
  message: string

  Icon?: ReactNode
  action?: IToastAction
  duration?: number
  styles?: Record<string, string>
}

export type { IToastProps }
