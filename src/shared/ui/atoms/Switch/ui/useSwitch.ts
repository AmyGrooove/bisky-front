import { ISwitchProps } from "../types/ISwitchProps"

const useSwitch = (props: ISwitchProps) => {
  const { className, ...otherProps } = props

  return { className, otherProps }
}

export { useSwitch }
