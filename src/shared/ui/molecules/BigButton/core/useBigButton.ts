import { IBigButtonProps } from '../types/IBigButtonProps'

const useBigButton = (props: IBigButtonProps) => {
  const {
    onClick,
    children,
    Icon,
    className,
    variant = 'small',
    isDisabled = false,
    iconText = null,
    type = 'button',
    ariaLabel,
  } = props

  return {
    onClick,
    children,
    Icon,
    className,
    variant,
    isDisabled,
    iconText,
    type,
    ariaLabel,
  }
}

export { useBigButton }
