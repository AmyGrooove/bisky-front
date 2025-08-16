import { ISwitchProps } from '../types/ISwitchProps'

const useSwitch = (props: ISwitchProps) => {
  const {
    value,
    onChange,
    variant = 'big',
    isDisabled = false,
    className,
  } = props

  const setChecked = () => {
    onChange(!value)
  }

  return { variant, className, value, isDisabled, setChecked }
}

export { useSwitch }
