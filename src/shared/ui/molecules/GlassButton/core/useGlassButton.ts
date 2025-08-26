import { TGlassButtonProps } from '../types/TGlassButtonProps'

const useGlassButton = (props: TGlassButtonProps) => {
  const {
    onClick,
    className,
    variant = 'small',
    isDisabled = false,
    ariaLabel,
    ...otherProps
  } = props

  return {
    onClick,
    className,
    variant,
    isDisabled,
    ariaLabel,
    otherProps,
  }
}

export { useGlassButton }
