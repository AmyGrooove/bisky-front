import { TButtonProps } from '../types/TButtonProps'

const useButton = (props: TButtonProps) => {
  const {
    onClick,
    children = null,
    Icon = null,
    className,
    variant = 'small',
    isDisabled = false,
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
    type,
    ariaLabel,
  }
}

export { useButton }
