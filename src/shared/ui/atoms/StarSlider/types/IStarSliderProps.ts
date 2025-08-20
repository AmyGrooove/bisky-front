interface IStarSliderProps {
  value: number
  onChange: (value: number) => void

  variant?: 'big' | 'small'
  isDisabled?: boolean
  className?: string
}

export type { IStarSliderProps }
