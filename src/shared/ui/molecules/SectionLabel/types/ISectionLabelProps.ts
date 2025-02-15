import { MouseEventHandler, ReactElement } from 'react'

interface ISectionLabelProps {
  children: string

  onClick?: MouseEventHandler<HTMLButtonElement>
  icon?: ReactElement<HTMLElement>
  className?: string
}

export type { ISectionLabelProps }
