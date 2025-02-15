import { IGlassButtonProps } from '../types/IGlassButtonProps'

const useGlassButton = (props: IGlassButtonProps) => {
  const {
    onClick,
    children,
    className = null,
    variant = 'small',
    isDisabled = false,
    iconClassName = null,
  } = props

  return { onClick, children, className, variant, isDisabled, iconClassName }
}

export { useGlassButton }
