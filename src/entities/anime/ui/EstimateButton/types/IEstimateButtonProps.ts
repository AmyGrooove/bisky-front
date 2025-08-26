import { MouseEventHandler } from 'react'
import { ESTIMATE_DATA } from '@entities/anime/static/ESTIMATE_DATA'

interface IEstimateButtonProps {
  listStatus: keyof typeof ESTIMATE_DATA
  onClick: MouseEventHandler<HTMLButtonElement>

  type?: 'BigButton' | 'Button'
  variant?: 'small' | 'big'
  isDisabled?: boolean
  className?: string
}

export type { IEstimateButtonProps }
