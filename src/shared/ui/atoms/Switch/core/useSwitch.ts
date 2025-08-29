import { useCallback } from 'react'

import { ISwitchProps } from '../types/ISwitchProps'

const useSwitch = (props: ISwitchProps) => {
  const {
    value,
    onChange,
    variant = 'big',
    isDisabled = false,
    className,
  } = props

  const toggle = useCallback(() => {
    onChange(!value)
  }, [onChange, value])

  return { variant, className, value, isDisabled, toggle }
}

export { useSwitch }
