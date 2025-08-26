interface ISwitchProps {
  value: boolean
  onChange: (value: boolean) => void

  variant?: 'big' | 'small'
  isDisabled?: boolean
  className?: string
  ariaLabel?: string
}

export type { ISwitchProps }
