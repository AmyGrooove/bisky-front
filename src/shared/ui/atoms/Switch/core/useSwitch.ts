import { ISwitchProps } from '../types/ISwitchProps'

const useSwitch = (props: ISwitchProps) => {
  const {
    value,
    onChange,
    variant = 'big',
    isDisabled = false,
    className,
  } = props

  const toggle = () => {
    onChange(!value)
  }

  return { variant, className, value, isDisabled, toggle }
}

export { useSwitch }
