import { ISwitchProps } from '../types/ISwitchProps'

const useSwitch = (props: ISwitchProps) => {
  const {
    value,
    onChange,
    variant = 'big',
    isDisabled = false,
    className,
    ariaLabel,
  } = props

  const toggle = () => {
    onChange(!value)
  }

  return { variant, className, value, isDisabled, toggle, ariaLabel }
}

export { useSwitch }
