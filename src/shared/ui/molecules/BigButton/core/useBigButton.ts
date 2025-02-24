import { IBigButtonProps } from '../types/IBigButtonProps'

const useBigButton = (props: IBigButtonProps) => {
  const {
    onClick,
    children,
    Icon,
    className = null,
    variant = 'small',
    isDisabled = false,
    iconText = null,
    isCustomColor = false,
  } = props

  return {
    onClick,
    children,
    Icon,
    className,
    variant,
    isDisabled,
    iconText,
    isCustomColor,
  }
}

export { useBigButton }
