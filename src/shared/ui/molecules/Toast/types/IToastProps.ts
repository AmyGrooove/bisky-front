import { IIconProps } from '@shared/types'
import { ComponentType } from 'react'

interface IToastAction {
  text: string
  callback: () => void
}

interface IToastProps {
  message: string

  Icon?: ComponentType<IIconProps>
  action?: IToastAction
  duration?: number
  styles?: Record<string, string>
}

export type { IToastProps }
