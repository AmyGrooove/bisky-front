import { IBigButtonProps } from '../types/IBigButtonProps'

const useBigButton = (props: IBigButtonProps) => {
  const {
    onClick,
    children,
    icon,
    className = null,
    variant = 'small',
    isDisabled = false,
    iconText = null,
    isCustomColor = false,
  } = props

  return {
    onClick,
    children,
    icon,
    className,
    variant,
    isDisabled,
    iconText,
    isCustomColor,
  }
}

export { useBigButton }
