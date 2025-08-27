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
  }
}

export { useBigButton }
