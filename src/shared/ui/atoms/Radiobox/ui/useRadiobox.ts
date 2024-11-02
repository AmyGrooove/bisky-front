import { IRadioboxProps } from "../types/IRadioboxProps"

const useRadiobox = (props: IRadioboxProps) => {
  const { className, name, ...otherProps } = props

  return { className, name, otherProps }
}

export { useRadiobox }
