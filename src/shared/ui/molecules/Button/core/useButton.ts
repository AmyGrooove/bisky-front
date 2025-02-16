import { TButtonProps } from '../types/TButtonProps'

const useButton = (props: TButtonProps) => {
  const {
    onClick,
    children = null,
    icon = null,
    className = null,
    variant = 'small',
    isDisabled = false,
    isCustomColor = false,
  } = props

  return {
    onClick,
    children,
    icon,
    className,
    variant,
    isDisabled,
    isCustomColor,
  }
}

export { useButton }
