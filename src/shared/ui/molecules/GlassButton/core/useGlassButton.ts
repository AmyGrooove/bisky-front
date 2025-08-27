import { TGlassButtonProps } from '../types/TGlassButtonProps'

const useGlassButton = (props: TGlassButtonProps) => {
  const {
    onClick,
    className,
    variant = 'small',
    isDisabled = false,
    ...otherProps
  } = props

  return {
    onClick,
    className,
    variant,
    isDisabled,
    otherProps,
  }
}

export { useGlassButton }
