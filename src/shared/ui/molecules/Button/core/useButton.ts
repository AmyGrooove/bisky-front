import { TButtonProps } from '../types/TButtonProps'

const useButton = (props: TButtonProps) => {
  const {
    onClick,
    children = null,
    Icon = null,
    className = null,
    variant = 'small',
    isDisabled = false,
    isCustomColor = false,
  } = props

  return {
    onClick,
    children,
    Icon,
    className,
    variant,
    isDisabled,
    isCustomColor,
  }
}

export { useButton }
