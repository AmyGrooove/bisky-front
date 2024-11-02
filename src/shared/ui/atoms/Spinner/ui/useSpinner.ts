import { ISpinnerProps } from "../types/ISpinnerProps"

const useSpinner = (props: ISpinnerProps) => {
  const { color = "bisky", className, ...otherProps } = props

  return { color, className, otherProps }
}

export { useSpinner }
